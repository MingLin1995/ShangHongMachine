import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "上泓機械有限公司",
                            "alternateName": "SHANG HONG MACHINE CO.,LTD",
                            "url": "https://www.shanghongmachine.com",
                            "logo": "https://www.shanghongmachine.com/images/logo.png",
                            "description": "台灣專業食品機械製造商，專注於生產高品質的攪拌機與炒食機",
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
                            "areaServed": ["TW"],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+886-4-25341453",
                                "faxNumber": "+886-4-25341553",
                                "email": "shanghong1002@gmail.com",
                                "contactType": "customer service",
                                "areaServed": ["TW"],
                                "availableLanguage": ["Chinese", "Min Nan Chinese", "English"]
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "食品機械設備",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Product",
                                            "name": "工業用攪拌機",
                                            "description": "專業食品級工業用攪拌機，適用於各種食品加工場域",
                                            "category": "食品機械設備",
                                            "brand": { "@type": "Brand", "name": "上泓機械" }
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Product",
                                            "name": "炒食機",
                                            "description": "高效能工業用炒食機，適合大量食材炒製",
                                            "category": "食品機械設備",
                                            "brand": { "@type": "Brand", "name": "上泓機械" }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": "https://www.shanghongmachine.com",
                            "name": "上泓機械有限公司",
                            "alternateName": "SHANG HONG MACHINE CO.,LTD",
                            "description": "台灣專業食品機械製造商，專注於生產高品質的攪拌機與炒食機",
                            "inLanguage": ["zh-TW", "en"],
                        }
                    ])
                }}
            />
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    )
} 