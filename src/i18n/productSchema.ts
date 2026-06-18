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

// B2B 機械沒有固定售價，售價以詢價為準。
// 此 offers 結構讓 Google 認得這是合法的 Product schema（必須有 offers/review/aggregateRating 其中一項），
// 同時用 priceSpecification 點明「需洽詢報價」、url 指向頁面內聯絡區塊，
// 避免 Rich Results 顯示假的「$0 / Free」。
function buildOffer(lang: "zh" | "en") {
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
  };
}

export function buildProductSchemas(lang: "zh" | "en") {
  const brandObj = { "@type": "Brand", name: BRAND };
  const manufacturerObj = {
    "@type": "Organization",
    name: lang === "zh" ? MANUFACTURER_ZH : MANUFACTURER_EN,
  };
  const offerObj = buildOffer(lang);

  const cookers = productData.cookers.types.map((c) => {
    const variant = cookerVariantName[c.model];
    const name = lang === "zh"
      ? `${c.model} ${variant.zh}`
      : `${c.model} ${variant.en}`;
    const capacities = c.specs.capacity.join(" / ");
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      model: c.model,
      sku: c.model,
      image: `${SITE}${c.image}`,
      category: lang === "zh" ? "食品機械設備 / 工業用炒食機" : "Food Machinery / Industrial Cooking Mixer",
      brand: brandObj,
      manufacturer: manufacturerObj,
      description: lang === "zh"
        ? `${c.model} ${variant.zh} — 容量 ${capacities}。適用於糖果類、調味類、餡料類食品加工。上泓機械 SHANG HONG MACHINE 台灣製造。`
        : `${c.model} ${variant.en} — capacity ${capacities}. Suitable for confectionery, seasonings and fillings. Made in Taiwan by SHANG HONG MACHINE 上泓機械.`,
      additionalProperty: [
        { "@type": "PropertyValue", name: lang === "zh" ? "容量規格" : "Capacity", value: capacities },
      ],
      offers: offerObj,
    };
  });

  const mixers = productData.mixers.models.map((m) => {
    const name = lang === "zh"
      ? `${m.model} 工業用攪拌機`
      : `${m.model} Industrial Food Mixer`;
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      model: m.model,
      sku: m.model,
      image: `${SITE}${m.image}`,
      category: lang === "zh" ? "食品機械設備 / 工業用攪拌機" : "Food Machinery / Industrial Food Mixer",
      brand: brandObj,
      manufacturer: manufacturerObj,
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
      offers: offerObj,
    };
  });

  return [...cookers, ...mixers];
}
