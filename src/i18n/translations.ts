// 共用的產品數據
const productData = {
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
      categories: {
        cookers: {
          title: "炒食機系列",
          specs: {
            model: "型號",
            capacity: "容量",
          },
          types: productData.cookers.types.map((type) => ({
            ...type,
            name: "固定式炒食機",
          })),
        },
        mixers: {
          title: "攪拌機系列",
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
            name: `攪拌機-${model.model}`,
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
      categories: {
        cookers: {
          title: "Cooking Mixer Series",
          specs: {
            model: "MODEL NO",
            capacity: "CAPACITY",
          },
          types: productData.cookers.types.map((type) => ({
            ...type,
            name: "Fixed Type Cooking Mixer",
          })),
        },
        mixers: {
          title: "Food Mixer Series",
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
            name: `Food Mixer-${model.model}`,
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
