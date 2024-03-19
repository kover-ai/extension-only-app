import {
  // Banner,
  useApi,
  // useTranslate,
  reactExtension,
  BlockLayout,
  BlockStack,
  Text,
  InlineStack,
  Checkbox,
  Icon,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.delivery-address.render-after",
  () => <Extension />,
);

function Extension() {
  const { extension, shop } = useApi();
  console.log(shop);

  return (
    <BlockStack inlineAlignment="center">
      <Text size="extraSmall">Total</Text>
    </BlockStack>
  );
}

// For unhandled promise rejections
self.addEventListener("unhandledrejection", (error) => {
  console.warn("event unhandledrejection", error);
});
// For other exceptions
self.addEventListener("error", (error) => {
  console.warn("event error", error);
});
