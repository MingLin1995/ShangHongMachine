import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        siteName: '上泓機械',
        title: '上泓機械 - 台灣專業食品機械製造商',
        description: '台灣在地食品機械製造商，專營工業用攪拌機、炒食機等食品加工設備。20年以上專業技術經驗，提供最優質的機械設備方案。',
        url: 'https://shanghongmachine.com',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: '上泓機械 - 台灣專業食品機械製造商',
            },
        ],
    },
}

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "上泓機械有限公司",
                        "url": "https://shanghongmachine.com",
                        "logo": "https://shanghongmachine.com/images/logo.png",
                        "image": "https://shanghongmachine.com/images/og-image.jpg",
                        "description": "台灣專業食品機械製造商，專注於生產高品質的攪拌機與炒食機",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "TW",
                            "addressRegion": "台中市",
                            "addressLocality": "潭子區",
                            "streetAddress": "大富路3段33巷20號",
                            "postalCode": "427341"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+886-4-25341453",
                            "faxNumber": "+886-4-25341553",
                            "email": "shanghong1002@gmail.com",
                            "contactType": "customer service",
                            "areaServed": ["TW"],
                            "availableLanguage": ["Chinese", "Min Nan Chinese", "English"]
                        }
                    })
                }}
            />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    )
} 