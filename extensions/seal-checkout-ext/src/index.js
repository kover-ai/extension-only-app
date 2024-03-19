import { extension } from "@shopify/ui-extensions/checkout";
import createWidget, {
  skeleton as widgetSkeleton,
} from "./components/widget/index.js";
import { reconstructCart } from "./querys/index.js";

const extensionPoint = "purchase.checkout.delivery-address.render-after";

export default extension(extensionPoint, async (root, api) => {
  const { lines, query, shop, checkoutToken } = api;
  console.log("api", api);
  const widget = createWidget(root);

  root.appendChild(widget);
  const items = await reconstructCart({ lines, query, shop }).catch(
    console.log,
  );
  const cart = {
    items,
    token: checkoutToken.current,
  };

  console.log("cart", JSON.stringify(cart));
});
