import { extension } from "@shopify/ui-extensions/checkout";
import createWidget from "./components/widget.js";
import {
  constructCart,
  getOrCreateSessionId,
  getOrCreateUserId,
  updateCartAttributes,
} from "./apis/index.js";
import { getMerchantProfile, getQuotation } from "./apis/services.js";
import {
  SP_QUOTE_ID_IN_ATTRIBUTE,
  extensionTarget,
} from "./common/constant.js";
import {
  cleanCart,
  detectSeelVariantsInCart,
  syncCartWithCheckboxStatus,
  getInitialCheckboxStatus,
} from "./utils/index.js";

export default extension(extensionTarget, async (root, api) => {
  const {
    cost,
    lines,
    query,
    shop,
    checkoutToken,
    storage,
    applyAttributeChange,
    applyCartLinesChange,
  } = api;

  // 1. get merchant profile and session id and user id.
  const profile = await getMerchantProfile(api).catch(console.log);
  const sessionId = await getOrCreateSessionId(api);
  const userId = await getOrCreateUserId(api);

  if (profile?.status !== "active") {
    return null;
  }

  // 2. construct cart
  const items = await constructCart(api).catch(console.log);
  const cart = {
    items,
    token: checkoutToken.current,
    currency: cost.totalAmount.current.currencyCode,
  };

  // 3. get quotation for cart.
  const quotation = await getQuotation(api, {
    source: "checkout",
    cartInfo: cart,
    sessionId,
    userId,
  }).catch(console.log);
  console.log(root, api, cart, profile, quotation);

  if (quotation?.status !== "accepted") {
    return null;
  }

  const [seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation] =
    detectSeelVariantsInCart({ cart, quotation });
  await cleanCart(api, {
    seelVariantMatchedWithQuotation,
    seelVariantsNotMatchedWithQuotation,
  });
  const initialCheckboxStatus = await getInitialCheckboxStatus(api, {
    profile,
    seelVariantMatchedWithQuotation,
  });
  await syncCartWithCheckboxStatus(api, {
    initialCheckboxStatus,
    profile,
    quotation,
    seelVariantMatchedWithQuotation,
  });

  // 4. update cart/checkout attributes
  updateCartAttributes(api, {
    [SP_QUOTE_ID_IN_ATTRIBUTE]: quotation.quoteId,
  }).catch(console.log);
  // 5. render widget
  const widget = createWidget(root, api, { initialCheckboxStatus, quotation });
  if (widget) {
    root.appendChild(widget);
  }
});
