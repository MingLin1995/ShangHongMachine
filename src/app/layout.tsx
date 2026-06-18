import { Inter, Noto_Sans_TC } from 'next/font/google'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { ClientLayout } from '@/components/ClientLayout'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const notoSansTC = Noto_Sans_TC({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-noto',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://www.shanghong-tw.com/'),
    title: {
        template: '%s | 上泓機械 SHANG HONG MACHINE',
        default: '上泓機械 SHANG HONG MACHINE - 台灣專業食品機械製造商 | 攪拌機 | 炒食機',
    },
    description: '上泓機械 SHANG HONG MACHINE 為台灣專業食品機械製造商，主要產品包括工業用攪拌機、炒食機等食品加工設備。位於台中市潭子區，擁有20年以上專業技術經驗。Taiwan food machinery manufacturer specializing in industrial mixers and cookers.',
    keywords: [
        '上泓機械',
        '上泓機械有限公司',
        'SHANG HONG MACHINE',
        'shang hong machine',
        'ShangHong',
        'Shang Hong',
        '食品機械',
        '炒食機',
        '攪拌機',
        '工業用攪拌機',
        '工業用炒食機',
        '食品加工設備',
        '台灣食品機械',
        '台灣機械製造',
        '食品機械設備',
        '食品攪拌機',
        '工業攪拌機',
        '食品炒食機',
        '麵團攪拌機',
        '商用攪拌機',
        '工業用食品機械',
        '食品加工機械',
        '台中食品機械',
        '潭子食品機械',
        '台灣機械廠商',
        'food machinery',
        'food mixer',
        'industrial mixer',
        'food cooker',
        'industrial cooker',
        'food processing equipment',
        'Taiwan food machinery',
        'dough mixer',
        'commercial mixer'
    ],
    authors: [{ name: '上泓機械有限公司' }],
    creator: '上泓機械有限公司',
    publisher: '上泓機械有限公司',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: 'https://www.shanghong-tw.com',
        languages: {
            'zh-TW': 'https://www.shanghong-tw.com',
            'en': 'https://www.shanghong-tw.com/en',
            'x-default': 'https://www.shanghong-tw.com'
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        alternateLocale: ['en_US'],
        siteName: '上泓機械 SHANG HONG MACHINE',
        title: '上泓機械 SHANG HONG MACHINE - 台灣專業食品機械製造商',
        description: '台灣在地食品機械製造商，專營工業用攪拌機、炒食機等食品加工設備。20年以上專業技術經驗。',
        url: 'https://www.shanghong-tw.com',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: '上泓機械 SHANG HONG MACHINE - 台灣專業食品機械製造商',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '上泓機械 SHANG HONG MACHINE - 台灣專業食品機械製造商',
        description: '台灣在地食品機械製造商，專營工業用攪拌機、炒食機等食品加工設備。',
        images: ['/images/og-image.png'],
    },
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = (await headers()).get('x-pathname') ?? '/'
    const lang = pathname.startsWith('/en') ? 'en' : 'zh-TW'
    return (
        <html lang={lang} suppressHydrationWarning>
            <head>
                {/* 同步讀 localStorage 設定 theme，避免首次 paint 閃白 (FOUC) */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}else if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
                    }}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#993333" />
                <meta name="msapplication-TileColor" content="#993333" />
                <meta name="application-name" content="上泓機械" />
                <meta name="apple-mobile-web-app-title" content="上泓機械" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            </head>
            <body className={`${inter.variable} ${notoSansTC.variable} font-sans antialiased`} suppressHydrationWarning>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    )
} 