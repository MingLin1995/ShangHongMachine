import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const BUSINESS_SCHEMA_EN = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.shanghong-tw.com/#organization",
    "name": "SHANG HONG MACHINE CO.,LTD",
    "alternateName": ["上泓機械有限公司", "SHANG HONG MACHINE", "Shang Hong Machine", "上泓機械"],
    "url": "https://www.shanghong-tw.com/en",
    "logo": "https://www.shanghong-tw.com/images/logo.png",
    "image": "https://www.shanghong-tw.com/images/og-image.png",
    "description": "SHANG HONG MACHINE (上泓機械) — a Taiwan-based professional food machinery manufacturer specializing in high-quality industrial mixers and cookers.",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "TW",
        "addressRegion": "Taichung City",
        "addressLocality": "Tanzi District",
        "streetAddress": "No. 20, Lane 33, Section 3, Dafu Rd.",
        "postalCode": "427341"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.2278019",
        "longitude": "120.687568"
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
        "availableLanguage": ["English", "Chinese", "Min Nan Chinese"]
    },
    "hasMap": "https://www.google.com/maps?cid=16758949604841997549",
    "sameAs": ["https://www.google.com/maps?cid=16758949604841997549"]
}

const WEBSITE_SCHEMA_EN = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.shanghong-tw.com/#website",
    "url": "https://www.shanghong-tw.com/en",
    "name": "SHANG HONG MACHINE CO.,LTD",
    "alternateName": ["上泓機械有限公司", "SHANG HONG MACHINE", "Shang Hong Machine", "上泓機械"],
    "description": "SHANG HONG MACHINE — Taiwan-based professional food machinery manufacturer.",
    "inLanguage": ["en", "zh-TW"],
    "publisher": { "@id": "https://www.shanghong-tw.com/#organization" },
    "about": { "@id": "https://www.shanghong-tw.com/#organization" }
}

// 完全不輸出任何 @type:"Product"。B2B 詢價式無固定售價，拿不到 Product rich result；
// 而 Google 會掃描整個 graph，Product 不管巢狀多深都會被驗證並要求
// offers/review/aggregateRating。產品型號與規格已存在於可見 HTML，SEO 不受影響。
const SCHEMA_JSON_EN = JSON.stringify([BUSINESS_SCHEMA_EN, WEBSITE_SCHEMA_EN])

export default function HomeEn() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: SCHEMA_JSON_EN }}
            />
            <Navbar />
            <main>
                <Hero />
                <Stats lang="en" />
                <About lang="en" />
                <Services lang="en" />
                <FAQ lang="en" />
                <Contact />
            </main>
            <Footer lang="en" />
        </>
    )
}
