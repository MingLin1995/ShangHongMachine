import { productData } from "./translations";

const SITE = "https://www.shanghong-tw.com";
const BRAND = "SHANG HONG MACHINE 上泓機械";
const MANUFACTURER_ZH = "上泓機械有限公司";
const MANUFACTURER_EN = "SHANG HONG MACHINE CO., LTD.";

const cookerVariantName: Record<string, { zh: string; en: string }> = {
  "SH-11F": { zh: "固定式工業炒食機", en: "Fixed-Type Industrial Cooking Mixer" },
  "SH-11T": { zh: "傾倒式工業炒食機", en: "Tilting-Type Industrial Cooking Mixer" },
  "SH-12T": { zh: "傾倒式工業炒食機（加大）", en: "Tilting-Type Industrial Cooking Mixer (Large)" },
  "SH-20S": { zh: "蒸氣加熱傾倒式工業炒食機", en: "Steam-Heated Tilting-Type Industrial Cooking Mixer" },
};

// 為什麼回傳的是 catalog 用的 Offer items，而非獨立 Product schema：
//
// B2B 機械沒有固定售價、靠詢價成交。當頁面有獨立 `@type: Product` 時，
// Google 會用兩套驗證器同時檢查：
//   - Product Snippets：要求 offers / review / aggregateRating 三者之一
//   - Merchant Listings：進一步要求 offers.price（明確數字）、貨幣、稅前/稅後、寄送/退貨政策
// 後者對 B2B 詢價式銷售不可能滿足，補 offers 反而觸發更嚴格的 Merchant Listings 檢查。
//
// 改採：把產品資料全部塞在 LocalBusiness.hasOfferCatalog 的 Offer.itemOffered=Product 結構裡。
// Google 仍會抓到型號名稱、規格、圖片做為 SEO 訊號，但因為 Product 被包在 Offer + OfferCatalog
// + LocalBusiness 三層深處，個別 Product Snippets / Merchant Listings 不會被觸發。

function buildCatalogOffer(
  lang: "zh" | "en",
  product: {
    name: string;
    model: string;
    image: string;
    description: string;
    additionalProperty: Array<{ "@type": "PropertyValue"; name: string; value: string }>;
  },
) {
  const contactUrl = lang === "zh" ? `${SITE}/#contact` : `${SITE}/en/#contact`;
  const sellerName = lang === "zh" ? MANUFACTURER_ZH : MANUFACTURER_EN;
  return {
    "@type": "Offer",
    url: contactUrl,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    priceCurrency: "TWD",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "TWD",
      valueAddedTaxIncluded: false,
      description: lang === "zh" ? "請洽詢報價" : "Price on request — contact for quote",
    },
    seller: {
      "@type": "Organization",
      name: sellerName,
    },
    itemOffered: {
      "@type": "Product",
      name: product.name,
      model: product.model,
      sku: product.model,
      image: `${SITE}${product.image}`,
      description: product.description,
      brand: { "@type": "Brand", name: BRAND },
      manufacturer: {
        "@type": "Organization",
        name: lang === "zh" ? MANUFACTURER_ZH : MANUFACTURER_EN,
      },
      additionalProperty: product.additionalProperty,
    },
  };
}

export function buildCookerOffers(lang: "zh" | "en") {
  return productData.cookers.types.map((c) => {
    const variant = cookerVariantName[c.model];
    const name = lang === "zh" ? `${c.model} ${variant.zh}` : `${c.model} ${variant.en}`;
    const capacities = c.specs.capacity.join(" / ");
    return buildCatalogOffer(lang, {
      name,
      model: c.model,
      image: c.image,
      description: lang === "zh"
        ? `${c.model} ${variant.zh} — 容量 ${capacities}。適用於糖果類、調味類、餡料類食品加工。上泓機械 SHANG HONG MACHINE 台灣製造。`
        : `${c.model} ${variant.en} — capacity ${capacities}. Suitable for confectionery, seasonings and fillings. Made in Taiwan by SHANG HONG MACHINE 上泓機械.`,
      additionalProperty: [
        { "@type": "PropertyValue", name: lang === "zh" ? "容量規格" : "Capacity", value: capacities },
      ],
    });
  });
}

export function buildMixerOffers(lang: "zh" | "en") {
  return productData.mixers.models.map((m) => {
    const name = lang === "zh" ? `${m.model} 工業用攪拌機` : `${m.model} Industrial Food Mixer`;
    return buildCatalogOffer(lang, {
      name,
      model: m.model,
      image: m.image,
      description: lang === "zh"
        ? `${m.model} 工業用攪拌機 — ${m.specs.power} 馬力、${m.specs.capacity} 桶容量、麵糰容量 ${m.specs.doughCapacity}。配備攪拌勾、攪拌扇、攪拌球三種專用配件，適用麵團、餡料、乳化加工。上泓機械 SHANG HONG MACHINE 台灣製造。`
        : `${m.model} Industrial Food Mixer — ${m.specs.power}, ${m.specs.capacity} bowl capacity, ${m.specs.doughCapacity} dough capacity. Comes with dough hook, flat beater, and wire whip — for dough, fillings, and emulsions. Made in Taiwan by SHANG HONG MACHINE 上泓機械.`,
      additionalProperty: [
        { "@type": "PropertyValue", name: lang === "zh" ? "馬力" : "Power", value: m.specs.power },
        { "@type": "PropertyValue", name: lang === "zh" ? "桶容量" : "Bowl capacity", value: m.specs.capacity },
        { "@type": "PropertyValue", name: lang === "zh" ? "麵糰容量" : "Dough capacity", value: m.specs.doughCapacity },
        { "@type": "PropertyValue", name: lang === "zh" ? "桶直徑" : "Bowl diameter", value: m.specs.bowlDiameter },
        { "@type": "PropertyValue", name: lang === "zh" ? "桶深度" : "Bowl depth", value: m.specs.bowlDepth },
        { "@type": "PropertyValue", name: lang === "zh" ? "機械尺寸" : "Dimensions", value: m.specs.dimensions },
        { "@type": "PropertyValue", name: lang === "zh" ? "淨重" : "Net weight", value: m.specs.weight },
      ],
    });
  });
}
