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

const queryNodeByProps = (root, selector) => {
  for (let i = 0, len = root?.children?.length; i < len; i++) {
    const child = root.children[i];
    if (child?.props) {
      let matched = true;
      Object.entries(selector).forEach(([key, value]) => {
        if (child.props[key] !== value) {
          matched = false;
        }
      });
      if (matched) {
        return child;
      } else if (child.children) {
        return queryNodeByProps(child, selector);
      }
    } else {
      if (child.children) {
        return queryNodeByProps(child, selector);
      }
    }
  }
};

const renderDescription = (root, quotation) => {
  const { currencyCode, price } = quotation;

  let amount = null;
  let currencySymbol = null;
  if (currencyCode.toLocaleUpperCase() === "EUR") {
    const numberFormat = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: currencyCode,
    });
    const parts = numberFormat.formatToParts(price);
    const partValues = parts.map((p) => p.value);
    currencySymbol = partValues.pop();
    partValues.pop();
    amount = partValues.join("");
  } else {
    const numberFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    });
    const parts = numberFormat.formatToParts(price);
    const partValues = parts.map((p) => p.value);
    currencySymbol = partValues.shift();
    amount = partValues.join("");
  }
  const description = `Protect against shipping loss, damage, theft & offset emissions for ${currencySymbol}${amount} ${currencyCode}`;
  return root.createComponent(Text, undefined, description);
};

// 4. widget checkbox change handler
const changeHandler = async (checked, api, quotation) => {
  const { lines, applyCartLinesChange } = api;
  if (checked) {
    const resp = await applyCartLinesChange({
      type: "addCartLine",
      merchandiseId: `gid://shopify/ProductVariant/${quotation.variantId}`,
      quantity: 1,
    }).catch(console.log);
    console.log("cart updated:", "add seel variant due to user action", resp);
    return resp;
  } else {
    const cartLine = lines.current.find((line) =>
      line.merchandise.id.includes(quotation.variantId),
    );
    if (cartLine?.id) {
      const resp = await applyCartLinesChange({
        type: "removeCartLine",
        id: cartLine.id,
        quantity: cartLine.quantity || 1,
      }).catch(console.log);
      console.log(
        "cart updated:",
        "remove seel variant due to user action",
        resp,
      );
      return resp;
    }
  }
};

export default (root, api, { initialCheckboxStatus, quotation }) => {
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
              id: "delivery-guarantee-checkbox",
              name: "delivery-guarantee-checkbox",
              value: Boolean(initialCheckboxStatus),
              onChange: async (value) => {
                changeHandler(value, api, quotation);
                const target = queryNodeByProps(root, {
                  id: "delivery-guarantee-checkbox",
                });
                if (target) {
                  target.updateProps({ value });
                }
              },
            },
            "",
          ),
          root.createComponent(
            Text,
            {
              emphasis: "bold",
            },
            "Delivery Guarantee™",
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
              { to: "https://www.seel.com/" },
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
              source: "https://static.seel.com/image/spo-sp-widget-icon.png",
            }),
          ),
          root.createComponent(InlineSpacer, { spacing: "base" }),
          renderDescription(root, quotation),
        ],
      ),
    ],
  );
};
