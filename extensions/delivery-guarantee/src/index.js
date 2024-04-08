import { extension } from "@shopify/ui-extensions/checkout";
import createWidget from "./components/widget.js";
import {
  constructCart,
  getOrCreateUserId,
  getOrCreateDeviceId,
  updateCartAttributes,
} from "./apis/index.js";
import { getMerchantConfig, createQuote } from "./apis/services.js";
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

// 0. Extension Setup:
// The extension function is called with an extensionTarget
// and an asynchronous callback function that receives the root element and an api object.
export default extension(extensionTarget, async (root, api) => {
  const { cost, checkoutToken } = api;

  // 1. Merchant Config and Session/User ID Retrieval
  const config = await getMerchantConfig(api).catch(console.log);
  const userId = await getOrCreateUserId(api);
  const deviceId = await getOrCreateDeviceId(api);

  if (config?.status !== "active") {
    return null;
  }

  // 2. Cart Construction
  // construct the cart based on the items in the current checkout.
  // The cart object includes items, the checkout token, and the currency code.
  const items = await constructCart(api).catch(console.log);
  const cart = {
    items,
    token: checkoutToken.current,
    currency: cost.totalAmount.current.currencyCode,
  };

  // 3. Quotation Retrieval
  const quotation = await createQuote(api, {
    source: "checkout",
    cartInfo: cart,
    userId,
    deviceId,
  }).catch(console.log);
  console.log(root, api, cart, config, quotation);

  if (quotation?.status !== "accepted") {
    return null;
  }

  // 4 Cart Management
  // 4.1 Seel Variants Detection:
  // detect Seel variants that match or do not match the quotation
  const [seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation] =
    detectSeelVariantsInCart({ cart, quotation });

  // 4.2 Cart Cleanup:
  // clean up the cart based on the Seel variants that matched or did not match the quotation
  await cleanCart(api, {
    seelVariantMatchedWithQuotation,
    seelVariantsNotMatchedWithQuotation,
  });

  // retrieve the initial checkbox status based on the merchant config and matched Seel variants
  const initialCheckboxStatus = await getInitialCheckboxStatus(api, {
    config,
    seelVariantMatchedWithQuotation,
  });

  // synchronize the cart with the initial checkbox status, merchant config, quotation, and matched Seel variants
  await syncCartWithCheckboxStatus(api, {
    initialCheckboxStatus,
    config,
    quotation,
    seelVariantMatchedWithQuotation,
  });

  // 5. Cart Attribute Update
  // update the cart/checkout attributes with the quotation ID
  updateCartAttributes(api, {
    [SP_QUOTE_ID_IN_ATTRIBUTE]: quotation.quoteId,
  }).catch(console.log);

  // 6. Widget Rendering
  // create a widget based on the initial checkbox status and quotation.
  // The widget is then appended to the root element if it is not null
  const widget = createWidget(root, api, { initialCheckboxStatus, quotation });
  if (widget) {
    root.appendChild(widget);
  }
});
