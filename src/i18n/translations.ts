// 定義型別
type CookerModel = "SH-11F" | "SH-11T" | "SH-12T" | "SH-20S";
type MixerModel = "SH-201" | "SH-201H" | "SH-301" | "SH-401";

// 定義產品名稱的型別
type ProductNames = {
  cookers: {
    [key in CookerModel]: {
      zh: string;
      en: string;
    };
  };
  mixers: {
    [key in MixerModel]: {
      zh: string;
      en: string;
    };
  };
};

// 產品名稱
const productNames: ProductNames = {
  cookers: {
    "SH-11F": {
      zh: "固定式",
      en: "Fixed Type",
    },
    "SH-11T": {
      zh: "傾倒式",
      en: "Tilting Type",
    },
    "SH-12T": {
      zh: "傾倒式",
      en: "Tilting Type",
    },
    "SH-20S": {
      zh: "蒸氣加熱 & 傾倒式",
      en: "Steam Heating & Tilting Type",
    },
  },
  mixers: {
    "SH-201": {
      zh: "攪拌機",
      en: "Food Mixer",
    },
    "SH-201H": {
      zh: "攪拌機",
      en: "Food Mixer",
    },
    "SH-301": {
      zh: "攪拌機",
      en: "Food Mixer",
    },
    "SH-401": {
      zh: "攪拌機",
      en: "Food Mixer",
    },
  },
};

// 定義 productData 的型別
type ProductData = {
  cookers: {
    types: Array<{
      model: CookerModel;
      specs: {
        capacity: string[];
      };
      image: string;
    }>;
  };
  mixers: {
    models: Array<{
      model: MixerModel;
      specs: {
        power: string;
        capacity: string;
        doughCapacity: string;
        bowlDiameter: string;
        bowlDepth: string;
        dimensions: string;
        weight: string;
      };
      image: string;
    }>;
  };
};

// 產品資料
const productData: ProductData = {
  cookers: {
    types: [
      {
        model: "SH-11F",
        specs: {
          capacity: ["50L", "80L", "150L", "200L"],
        },
        image: "/images/products/cooker-fixed.jpg",
      },
      {
        model: "SH-11T",
        specs: {
          capacity: ["50L", "80L", "150L", "200L"],
        },
        image: "/images/products/cooker-tilt.jpg",
      },
      {
        model: "SH-12T",
        specs: {
          capacity: ["50L", "80L", "150L", "200L", "300L"],
        },
        image: "/images/products/cooker-tilt-2.jpg",
      },
      {
        model: "SH-20S",
        specs: {
          capacity: ["50L", "80L", "150L", "200L", "300L"],
        },
        image: "/images/products/cooker-steam.jpg",
      },
    ],
  },
  mixers: {
    models: [
      {
        model: "SH-201",
        specs: {
          power: "1/2HP",
          capacity: "20 LITER",
          doughCapacity: "3 kg",
          bowlDiameter: "340 mm",
          bowlDepth: "300 mm",
          dimensions: "52*52*85cm",
          weight: "90 kg",
        },
        image: "/images/products/mixer-201.jpg",
      },
      {
        model: "SH-201H",
        specs: {
          power: "1/2HP",
          capacity: "20L",
          doughCapacity: "3kg",
          bowlDiameter: "340mm",
          bowlDepth: "300mm",
          dimensions: "65x54x108mm",
          weight: "98kg",
        },
        image: "/images/products/mixer-201h.jpg",
      },
      {
        model: "SH-301",
        specs: {
          power: "1HP",
          capacity: "30L",
          doughCapacity: "6kg",
          bowlDiameter: "370mm",
          bowlDepth: "365mm",
          dimensions: "65x66x102mm",
          weight: "150kg",
        },
        image: "/images/products/mixer-301.jpg",
      },
      {
        model: "SH-401",
        specs: {
          power: "1.5HP",
          capacity: "40L",
          doughCapacity: "9kg",
          bowlDiameter: "395mm",
          bowlDepth: "380mm",
          dimensions: "65x62x107mm",
          weight: "170kg",
        },
        image: "/images/products/mixer-401.jpg",
      },
    ],
  },
};

export const translations = {
  zh: {
    nav: {
      about: "關於我們",
      products: "產品介紹",
      contact: "聯絡我們",
      download: "型錄下載",
    },
    hero: {
      title: "上泓機械有限公司",
      subtitle: "專業食品機械製造商",
      cta: "了解更多",
    },
    about: {
      title: "關於我們",
      story: {
        title: "公司簡介",
        content:
          "上泓機械有限公司是一家專業製造食品機械的企業，專注於生產高品質的攪拌機與炒食機。我們不僅致力於技術創新和多元化產品開發，還提供全面的技術整合解決方案，旨在與客戶攜手達成共同進步的目標。",
      },
      vision: {
        title: "企業願景",
        content:
          "上泓機械秉持著誠信與專業的服務態度，熱忱期待業界先進的指導與支援。我們不僅重視國內市場的拓展，更積極開拓國際市場，歡迎來自全球各地的公司與我們攜手合作，共創互利共贏的商業契機。",
      },
    },
    products: {
      title: "產品介紹",
      intro: "高效食品加工設備，助力您提升產能",
      description:
        "我們的炒食機與攪拌機系列專為食品加工廠、餐廳及創業工作室設計，為您的食品製作過程提供高效且穩定的解決方案。無論是精緻甜點、風味醬料，還是多樣化的餡料製作，都能輕鬆應對。",
      categories: {
        cookers: {
          title: "炒食機系列",
          subtitle: "均勻拌炒，品質保證",
          description: `專注於多元化烹調需求，打造極致拌炒體驗：

          • 均勻受熱：確保食材風味完美呈現
          • 多鍋具選擇：單層鍋、導熱油鍋、蒸汽鍋，應對不同烹調需求
          • 適用多樣食品：花生糖、肉燥、醬料、糖水、鳳梨餡等輕鬆完成
          • 自動化操作：節省人力，提升效率
          • 衛生易清潔：符合食品安全要求，降低維護負擔`,
          specs: {
            model: "型號",
            capacity: "容量",
          },
          types: productData.cookers.types.map((type) => ({
            ...type,
            name: productNames.cookers[type.model].zh,
          })),
        },
        mixers: {
          title: "攪拌機系列",
          subtitle: "一機多用，創造更多可能",
          description: `配置三種專用攪拌配件，輕鬆應對多元加工場景：

          1. 攪拌勾：適合麵團製作
          • 應用於麵包、水餃皮、派皮、包子等各類麵製品

          2. 攪拌扇：軟質食材的理想選擇
          • 專為果醬、水餃餡、餅乾及各類餡料設計

          3. 攪拌球：處理稀軟混合物的專家
          • 完美用於奶油、美乃滋、蛋糕、發糕等食品製作

          功能亮點：
          • 多功能性設計，一機多用
          • 攪拌穩定，效果均勻
          • 符合食品安全標準，安心使用
          • 操作簡單，清潔便利`,
          specs: {
            model: "型號",
            power: "馬力",
            capacity: "桶容量",
            doughCapacity: "麵糰容量",
            bowlDiameter: "桶直徑",
            bowlDepth: "桶深度",
            dimensions: "機械尺寸",
            weight: "淨重",
          },
          models: productData.mixers.models.map((model) => ({
            ...model,
            name: productNames.mixers[model.model].zh,
          })),
        },
      },
    },
    contact: {
      title: "聯絡我們",
      company: "上泓機械有限公司",
      tel: "TEL：886-4-25341453",
      fax: "FAX：886-4-25341553",
      address: "地址：427341台中市潭子區大富路3段33巷20號",
      email: "信箱：shanghong1002@gmail.com",
      form: {
        name: "姓名",
        email: "信箱",
        message: "訊息",
        submit: "送出",
        submitting: "送出中...",
      },
    },
    download: {
      title: "型錄下載",
      button: "下載產品型錄",
      description: "下載完整產品型錄，了解更多產品細節",
    },
  },
  en: {
    nav: {
      about: "About",
      products: "Products",
      contact: "Contact",
      download: "Download",
    },
    hero: {
      title: "SHANG HONG MACHINE CO.,LTD",
      subtitle: "Professional Food Machinery Manufacturer",
      cta: "Learn More",
    },
    about: {
      title: "About Us",
      story: {
        title: "Company Profile",
        content:
          "SHANG HONG MACHINE CO.,LTD is a professional manufacturer of food machinery, specializing in producing food mixer and cooking mixer. We are committed to technological innovation and diversified product development, offering comprehensive technical integration solutions with the goal of achieving mutual progress with our customers.",
      },
      vision: {
        title: "Our Vision",
        content:
          "SHANG HONG MACHINE upholds a service attitude of integrity and professionalism, and we eagerly anticipate guidance and support from industry leaders. We value the expansion of the domestic market and actively explore international markets, welcoming companies from around the world to collaborate with us for mutually beneficial business opportunities.",
      },
    },
    products: {
      title: "Products",
      intro:
        "High-Efficiency Food Processing Equipment for Enhanced Productivity",
      description:
        "Our cooking mixers and food mixers are specially designed for food processing factories, restaurants, and startup workshops, providing efficient and stable solutions for your food production. Whether it's delicate desserts, flavorful sauces, or various fillings, we've got you covered.",
      categories: {
        cookers: {
          title: "Cooking Mixer Series",
          subtitle: "Even Cooking, Quality Assured",
          description: `Focused on diverse cooking needs, delivering ultimate mixing experience:

          • Even Heating: Ensures perfect flavor presentation
          • Multiple Pot Options: Single layer, Heat conducting oil, Steam pot for different cooking needs
          • Wide Application: Easily handles peanut candy, meat sauce, condiments, sugar syrup, pineapple filling
          • Automated Operation: Labor-saving, efficiency-enhancing
          • Hygienic & Easy to Clean: Meets food safety requirements, reduces maintenance burden`,
          specs: {
            model: "MODEL NO",
            capacity: "CAPACITY",
          },
          types: productData.cookers.types.map((type) => ({
            ...type,
            name: productNames.cookers[type.model].en,
          })),
        },
        mixers: {
          title: "Food Mixer Series",
          subtitle: "One Machine, Multiple Possibilities",
          description: `Equipped with three specialized mixing attachments for various processing scenarios:

          1. Dough Hook: Perfect for Dough Making
          • Applications: Bread, dumpling skin, pie crust, buns, and various pastries

          2. Flat Beater: Ideal for Soft Ingredients
          • Designed for jam, dumpling filling, cookies, and various fillings

          3. Wire Whip: Expert in Soft Mixture Processing
          • Perfect for butter, mayonnaise, cake, steamed cake production

          Key Features:
          • Multi-functional design, versatile applications
          • Stable mixing, consistent results
          • Food safety compliant, reliable usage
          • Easy operation and cleaning`,
          specs: {
            model: "MODEL NO",
            power: "POWER",
            capacity: "BOWL CAPACITY",
            doughCapacity: "DOUGH CAPACITY",
            bowlDiameter: "BOWL DIA",
            bowlDepth: "BOWL DEPTH",
            dimensions: "MACHINE SIZE",
            weight: "N.W.",
          },
          models: productData.mixers.models.map((model) => ({
            ...model,
            name: productNames.mixers[model.model].en,
          })),
        },
      },
    },
    contact: {
      title: "Contact Us",
      company: "SHANG HONG MACHINE CO.,LTD",
      tel: "TEL：886-4-25341453",
      fax: "FAX：886-4-25341553",
      address:
        "Address：No. 20, Ln. 33, Sec. 3, Dafu Rd., Tanzi Dist., Taichung City 427341 Taiwan",
      email: "Email：shanghong1002@gmail.com",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
        submitting: "Submitting...",
      },
    },
    download: {
      title: "Download",
      button: "Download Catalog",
      description: "Download our complete product catalog for more details",
    },
  },
};
