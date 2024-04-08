import calmelCase from "lodash.camelcase";

export const convertGidToId = (gid) => {
  return gid.split("/").pop();
};

// calculate prices when constructing cart
export const calculatePrices = ({ variant, cartLine }) => {
  const { compareAtPrice, price } = variant;
  const { quantity } = cartLine;

  return {
    price: parseInt(price.amount * 100),
    discounted_price: parseInt(price.amount * 100),
    line_price: parseInt(price.amount * quantity * 100),
    final_price: parseInt(price.amount * 100),
    final_line_price: parseInt(price.amount * quantity * 100),
  };
};

export const formatQuotation = (quotation) => {
  const {
    status,
    quote_id,
    currencyCode,
    currencySymbol,
    bp_price,
    bp_variant_id,
    bp_product_id,
    bp_value,
    eligible_items,
  } = quotation;

  const eligibleItems = eligible_items.map((obj) => {
    return Object.entries(obj).map(([key, value]) => {
      return {
        [calmelCase(key)]: value,
      };
    });
  });

  return {
    status,
    quoteId: quote_id,
    currencyCode,
    currencySymbol,
    price: bp_price,
    variantId: bp_variant_id,
    productId: bp_product_id,
    value: bp_value,
    eligibleItems,
  };
};

export const detectSeelVariantsInCart = ({ cart, quotation }) => {
  const { productId, variantId } = quotation;
  const { items } = cart;
  const seelVariants = items.filter((item) =>
    item["product_id"] == productId ? true : false,
  );
  if (!seelVariants?.length) {
    return [];
  }

  let seelVariantMatchedWithQuotation = null;
  const seelVariantsNotMatchedWithQuotation = [];
  seelVariants.forEach((variant) => {
    if (variant["variant_id"] == variantId) {
      seelVariantMatchedWithQuotation = variant;
    } else {
      seelVariantsNotMatchedWithQuotation.push(variant);
    }
  });
  return [seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation];
};

export const cleanCart = async (
  api,
  { seelVariantMatchedWithQuotation, seelVariantsNotMatchedWithQuotation },
) => {
  if (
    !seelVariantMatchedWithQuotation &&
    !seelVariantsNotMatchedWithQuotation?.length
  ) {
    return true;
  }
  const { lines, applyCartLinesChange } = api;

  // remove not matched seel variants
  for (
    let i = 0, len = seelVariantsNotMatchedWithQuotation.length;
    i < len;
    i++
  ) {
    const notMatchedItem = seelVariantsNotMatchedWithQuotation[i];
    const found = lines.current.find((l) =>
      l.merchandise.id.includes(notMatchedItem.id),
    );
    const resp = await applyCartLinesChange({
      type: "removeCartLine",
      id: found.id,
      quantity: found.quantity,
    }).catch(console.log);
    console.log("cart updated:", "remove not matched seel variants", resp);
  }

  // keep matched seel variant with quantity 1 only.
  if (
    seelVariantMatchedWithQuotation &&
    seelVariantMatchedWithQuotation?.quantity !== 1
  ) {
    const found = lines.current.find((l) =>
      l.merchandise.id.includes(seelVariantMatchedWithQuotation?.id),
    );
    if (found) {
      const resp = await applyCartLinesChange({
        type: "updateCartLine",
        id: String(found.id),
        merchandiseId: found.merchandise.id,
        quantity: 1,
      }).catch(console.log);
      console.log(
        "cart updated:",
        "keep matched seel variant with quantity 1 only",
        resp,
      );
    }
  }
};

export const getInitialCheckboxStatus = async (
  api,
  { profile, seelVariantMatchedWithQuotation },
) => {
  if (Boolean(seelVariantMatchedWithQuotation)) {
    return Boolean(seelVariantMatchedWithQuotation);
  } else {
    return profile.defaultOpt === "true" || profile.defaultOpt === true;
  }
};

// 1. profile's status is default-on
// 1.1 seel variant in cart match with quotation
// do nothing
// 1.2 seel variant in cart not match with quotation
// add quotation's variant to cart with quantity 1
// 2. profile's status is default-off
// 2.1 seel variant in cart match with quotation
// set checkbox initial status to active
// 2.2 seel variant in cart not match with quotation
// do nothing
export const syncCartWithCheckboxStatus = async (
  api,
  {
    initialCheckboxStatus,
    profile,
    quotation,
    seelVariantMatchedWithQuotation,
  },
) => {
  const { applyCartLinesChange } = api;

  if (initialCheckboxStatus) {
    if (seelVariantMatchedWithQuotation) {
      // do nothing
    } else {
      const resp = await applyCartLinesChange({
        type: "addCartLine",
        merchandiseId: `gid://shopify/ProductVariant/${quotation.variantId}`,
        quantity: 1,
      });

      console.log("cart updated:", "add seel variant due to default-on", resp);
      return resp;
    }
  } else {
    if (seelVariantMatchedWithQuotation) {
      // quantity is handled by `cleanCart` step
    } else {
      // do nothing
    }
  }
};
