import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { buildCookerOffers, buildMixerOffers } from '@/i18n/productSchema'

const BUSINESS_SCHEMA_ZH = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "上泓機械有限公司",
    "alternateName": ["SHANG HONG MACHINE CO.,LTD", "SHANG HONG MACHINE", "Shang Hong Machine", "上泓機械"],
    "url": "https://www.shanghong-tw.com",
    "logo": "https://www.shanghong-tw.com/images/logo.png",
    "image": "https://www.shanghong-tw.com/images/og-image.png",
    "description": "上泓機械 SHANG HONG MACHINE — 台灣專業食品機械製造商，專注於生產高品質的工業用攪拌機與炒食機。Taiwan-based professional food machinery manufacturer.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW",
        "addressRegion": "台中市",
        "addressLocality": "潭子區",
        "streetAddress": "大富路3段33巷20號",
        "postalCode": "427341"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.2139",
        "longitude": "120.7034"
    },
    "telephone": "+886-4-25341453",
    "faxNumber": "+886-4-25341553",
    "email": "shanghong1002@gmail.com",
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "areaServed": ["TW", "Worldwide"],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+886-4-25341453",
        "faxNumber": "+886-4-25341553",
        "email": "shanghong1002@gmail.com",
        "contactType": "customer service",
        "areaServed": ["TW", "Worldwide"],
        "availableLanguage": ["Chinese", "Min Nan Chinese", "English"]
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "食品機械設備",
        "itemListElement": [
            {
                "@type": "OfferCatalog",
                "name": "工業用炒食機系列 Cooking Mixer Series",
                "itemListElement": buildCookerOffers('zh')
            },
            {
                "@type": "OfferCatalog",
                "name": "工業用攪拌機系列 Food Mixer Series",
                "itemListElement": buildMixerOffers('zh')
            }
        ]
    }
}

const WEBSITE_SCHEMA_ZH = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.shanghong-tw.com",
    "name": "上泓機械有限公司",
    "alternateName": ["SHANG HONG MACHINE CO.,LTD", "SHANG HONG MACHINE", "Shang Hong Machine", "上泓機械"],
    "description": "上泓機械 SHANG HONG MACHINE — 台灣專業食品機械製造商，專注於生產高品質的攪拌機與炒食機。",
    "inLanguage": ["zh-TW", "en"]
}

// 預先序列化整批 JSON-LD，避免每次 request 重新建構與 stringify。
// 不再輸出獨立的 Product schema（會觸發 Merchant Listings 嚴格驗證且 B2B 無法滿足）；
// 產品資訊全部嵌在 LocalBusiness.hasOfferCatalog 內。
const SCHEMA_JSON_ZH = JSON.stringify([BUSINESS_SCHEMA_ZH, WEBSITE_SCHEMA_ZH])

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: SCHEMA_JSON_ZH }}
            />
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <Services />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
