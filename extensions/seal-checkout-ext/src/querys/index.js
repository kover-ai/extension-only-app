import { constants } from "buffer";

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
  const { data } = await resp.json();
  const { node: variant, product } = data;
  console.log(variant, product, line);
  return { variant, product, inCart: line.inCart };
};

export const reconstructCart = async ({ lines, shop }) => {
  const itemsInCart = lines.current.map((line) => {
    const { merchandise, quantity, cost, attributes } = line;
    const { id, product } = merchandise;
    return {
      variantId: id,
      productId: product.id,
      inCart: { quantity, cost, attributes, merchandise },
    };
  });
  const items = await Promise.all(
    itemsInCart.map((item) => getProductVariant({ lines, shop }, item)),
  ).catch(console.log);
  const cartLines = items.map(({ variant, product, inCart }) => {
    const { quantity, cost, merchandise } = inCart;
    return {
      id: variant.id,
      quantity,
      variant_id: variant.id,
      title: `${product.title} - ${variant.title}`,
      price: variant.price.amount,
      discounted_price: variant?.compareAtPrice?.amount || variant.price.amount,
      line_price: cost.totalAmount.amount,
      sku: variant.sku,
      final_price: "", // ???
      final_line_price: "", // ???
      product_id: product.id,
      requires_shipping: merchandise.requiresShipping,
      product_title: product.title,
      variant_title: variant.title,
      currency: cost.totalAmount.currencyCode,
    };
  });
  return cartLines;
};
