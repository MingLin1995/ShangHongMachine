import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ClientLayout } from '@/components/ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://www.shanghongmachine.com/'),
    title: {
        template: '%s | 上泓機械 - 專業食品機械製造商',
        default: '上泓機械 - 台灣專業食品機械製造商 | 攪拌機 | 炒食機',
    },
    description: '上泓機械專業製造食品機械設備，主要產品包括工業用攪拌機、炒食機等食品加工設備。位於台中市，擁有20年以上專業技術經驗，提供最優質的機械設備方案。產品適用於食品加工廠、餐廳及創業工作室。',
    keywords: [
        '食品機械',
        '炒食機',
        '攪拌機',
        '工業用攪拌機',
        '工業用炒食機',
        '食品加工設備',
        '台灣食品機械',
        '台灣機械製造',
        '食品機械設備',
        '上泓機械',
        '食品攪拌機',
        '工業攪拌機',
        '食品炒食機',
        '麵團攪拌機',
        '商用攪拌機',
        '工業用食品機械',
        '食品加工機械',
        '台中食品機械',
        '潭子食品機械',
        '台灣機械廠商'
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
        canonical: 'https://www.shanghongmachine.com',
        languages: {
            'zh-TW': 'https://www.shanghongmachine.com',
            'en': 'https://www.shanghongmachine.com?lang=en'
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
        siteName: '上泓機械',
        title: '上泓機械 - 台灣專業食品機械製造商',
        description: '台灣在地食品機械製造商，專營工業用攪拌機、炒食機等食品加工設備。20年以上專業技術經驗，提供最優質的機械設備方案。',
        url: 'https://www.shanghongmachine.com',
        images: [
            {
                url: '/images/og-image.jpg',
                alt: '上泓機械 - 台灣專業食品機械製造商',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '上泓機械 - 台灣專業食品機械製造商',
        description: '台灣在地食品機械製造商，專營工業用攪拌機、炒食機等食品加工設備。',
        images: ['/images/og-image.jpg'],
    },
    verification: {
        google: 'your-google-verification-code', // 需要替換為實際的 Google Search Console 驗證碼
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.shanghongmachine.com" />
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
            <body className={inter.className}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    )
} 