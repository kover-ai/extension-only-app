import {
  extension,
  BlockLayout,
  BlockSpacer,
  InlineLayout,
  InlineStack,
  InlineSpacer,
  Checkbox,
  Image,
  Style,
  Text,
  View,
  Link,
} from "@shopify/ui-extensions/checkout";

export const skeleton = () => {};

const noob = () => null;
export default (root, data) => {
  return root.createComponent(
    BlockLayout,
    {
      rows: ["auto", "auto", "auto"],
      border: "base",
      cornerRadius: "base",
      padding: "base",
    },
    [
      root.createComponent(
        InlineStack,
        {
          spacing: "base",
          padding: "none",
          blockAlignment: "center",
        },
        [
          root.createComponent(
            Checkbox,
            {
              id: "seel-checkout",
              name: "seel-checkout",
              onChange: data?.eventHandlers?.onChange,
            },
            "",
          ),
          root.createComponent(
            Text,
            {
              emphasis: "bold",
            },
            "ADD GREEN SHIPPING PROTECTION",
          ),
          // https://static.seel.com/image/widget-info-icon.svg
          root.createComponent(
            View,
            {
              border: "none",
              padding: "none",
              maxInlineSize: Style.default(14),
            },
            root.createComponent(
              Link,
              { to: "https://www.seel.com/terms/17trackbuyerprotection" },
              root.createComponent(Image, {
                loading: "lazy",
                source: "https://static.seel.com/image/widget-info-icon.svg",
              }),
            ),
          ),
        ],
      ),
      root.createComponent(BlockSpacer, { spacing: "extraTight" }),
      root.createComponent(
        InlineLayout,
        {
          columns: ["auto", "auto", "fill"],
          blockAlignment: "center",
        },
        [
          root.createComponent(
            View,
            {
              border: "none",
              padding: "none",
              maxInlineSize: Style.default(20),
            },
            root.createComponent(Image, {
              loading: "lazy",
              source:
                "https://cdn.seel.com/assets/images/17bp-widget-icon-ext.png",
            }),
          ),
          root.createComponent(InlineSpacer, { spacing: "base" }),
          root.createComponent(
            Text,
            undefined,
            "Protect against shipping loss, damage, delay & offset emissions for $5.35USD",
          ),
        ],
      ),
    ],
  );
};
