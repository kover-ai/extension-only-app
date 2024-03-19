export const getCart = async () => {
  const resp = await fetch(
    "https://test-for-extensibility.myshopify.com/cart.js",
  );
  const cart = await resp.json();
  return cart;
};
