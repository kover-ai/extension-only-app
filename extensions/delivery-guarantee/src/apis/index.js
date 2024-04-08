import {
  SEEL_SESSION_ID_STORAGE,
  SEEL_USER_ID_STORAGE,
} from "../common/constant";
import { convertGidToId, calculatePrices } from "../utils/index.js";
import { v4 as uuidv4 } from "uuid";

export const getProductVariant = async ({ shop }, line) => {
  const queryProductVariant = {
    query: `query {
      product(id: "${btoa(line.productId)}") {
        ... on Product {
          id
          title
          handle
          description
          isGiftCard
          productType
          featuredImage {
            altText
            height
            width
            url
          }
        }
      }
      node(id: "${btoa(line.variantId)}") {
        ... on ProductVariant {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          sku
          taxable
          image {
            altText
            height
            width
            url
          }
        }
      }
    }`,
  };
  const resp = await fetch(`${shop.storefrontUrl}api/2024-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryProductVariant),
  }).catch(console.log);

  try {
    const { data } = await resp.json();
    const { node: variant, product } = data;
    return { variant, product, cartLine: line.cartLine };
  } catch (e) {
    return null;
  }
};

export const constructCart = async ({ lines, shop }) => {
  const itemsInCart = lines.current.map((line) => {
    const { merchandise, quantity, cost, attributes } = line;
    const { id, product } = merchandise;
    return {
      variantId: id,
      productId: product.id,
      cartLine: { quantity, cost, attributes, merchandise },
    };
  });
  const result = await Promise.all(
    itemsInCart.map((item) => getProductVariant({ lines, shop }, item)),
  ).catch(console.log);
  const items = result.filter(Boolean) || [];
  const cartLines = items.map(({ variant, product, cartLine }) => {
    const { quantity, merchandise } = cartLine;
    const {
      price,
      discounted_price,
      line_price,
      final_price,
      final_line_price,
    } = calculatePrices({ variant, product, cartLine });
    return {
      id: convertGidToId(variant.id),
      quantity,
      variant_id: convertGidToId(variant.id),
      title: `${product.title} - ${variant.title}`,
      price,
      discounted_price,
      line_price,
      final_price,
      final_line_price,
      sku: variant.sku,
      product_id: convertGidToId(product.id),
      requires_shipping: merchandise.requiresShipping,
      product_title: product.title,
      variant_title: variant.title,
    };
  });
  return cartLines;
};

export const getOrCreateSessionId = async ({ storage }) => {
  let sessionId = await storage.read(SEEL_SESSION_ID_STORAGE);
  if (!sessionId) {
    sessionId = uuidv4();
    storage.write(SEEL_SESSION_ID_STORAGE, sessionId);
  }
  return sessionId;
};

export const getOrCreateUserId = async ({ storage }) => {
  let userId = await storage.read(SEEL_USER_ID_STORAGE);
  if (!userId) {
    userId = uuidv4();
    storage.write(SEEL_USER_ID_STORAGE, userId);
  }
  return userId;
};

export const updateCartAttributes = async (
  { applyAttributeChange },
  attributes,
) => {
  const result = await Promise.all(
    Object.entries(attributes).map(([key, value]) =>
      applyAttributeChange({
        type: "updateAttribute",
        key,
        value,
      }),
    ),
  ).catch(console.log);
  return result;
};
