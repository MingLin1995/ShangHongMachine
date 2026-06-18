import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { buildProductSchemas } from '@/i18n/productSchema'

const BUSINESS_SCHEMA_EN = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
        "availableLanguage": ["English", "Chinese", "Min Nan Chinese"]
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Food Machinery",
        "itemListElement": [
            {
                "@type": "OfferCatalog",
                "name": "Industrial Cooking Mixer Series 工業用炒食機系列",
                "itemListElement": [
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-11F Fixed-Type Industrial Cooking Mixer", "model": "SH-11F" } },
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-11T Tilting-Type Industrial Cooking Mixer", "model": "SH-11T" } },
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-12T Tilting-Type Industrial Cooking Mixer (Large)", "model": "SH-12T" } },
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-20S Steam-Heated Tilting-Type Industrial Cooking Mixer", "model": "SH-20S" } }
                ]
            },
            {
                "@type": "OfferCatalog",
                "name": "Industrial Food Mixer Series 工業用攪拌機系列",
                "itemListElement": [
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-201 Industrial Food Mixer", "model": "SH-201" } },
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-201H Industrial Food Mixer", "model": "SH-201H" } },
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-301 Industrial Food Mixer", "model": "SH-301" } },
                    { "@type": "Offer", "priceCurrency": "TWD", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Product", "name": "SH-401 Industrial Food Mixer", "model": "SH-401" } }
                ]
            }
        ]
    }
}

const WEBSITE_SCHEMA_EN = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.shanghong-tw.com/en",
    "name": "SHANG HONG MACHINE CO.,LTD",
    "alternateName": ["上泓機械有限公司", "SHANG HONG MACHINE", "Shang Hong Machine", "上泓機械"],
    "description": "SHANG HONG MACHINE — Taiwan-based professional food machinery manufacturer.",
    "inLanguage": ["en", "zh-TW"]
}

const SCHEMA_JSON_EN = JSON.stringify([
    BUSINESS_SCHEMA_EN,
    WEBSITE_SCHEMA_EN,
    ...buildProductSchemas('en'),
])

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
