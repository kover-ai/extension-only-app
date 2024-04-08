import { v4 as uuidv4 } from "uuid";
import { formatQuotation } from "../utils/index.js";

export const getMerchantProfile = async (api) => {
  const { shop } = api;
  const { myshopifyDomain } = shop;
  const resp = await fetch(
    `https://api.seel.com/gateway/merchant-service/api/query-shopify-bp-config?shopDomain=${myshopifyDomain}`,
    {
      headers: {
        "x-request-id": `${uuidv4()}__${Date.now()}`,
      },
      method: "GET",
    },
  );
  const { code, data } = await resp.json();
  if (code === 0 && data) {
    return data;
  } else {
    return null;
  }
};

export const getQuotation = async (
  api,
  { source, cartInfo, sessionId, userId },
) => {
  const payload = {
    source: source || "checkout",
    cart_info: cartInfo,
    customer_info: {
      timestamp_in_ms: Date.now(),
      device_id: userId,
      user_id: sessionId,
    },
    shop_domain: api?.shop?.myshopifyDomain || "",
  };

  const resp = await fetch(
    "https://api.seel.com/gateway/quotes-service/api/bp-quotes",
    {
      headers: {
        "x-request-id": `${uuidv4()}__${Date.now()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    },
  ).catch(console.log);
  const { code, data } = await resp.json();
  if (code === 0 && data) {
    return formatQuotation(data);
  } else {
    return null;
  }
};
