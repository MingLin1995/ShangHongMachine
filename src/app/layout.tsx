import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ClientLayout } from '@/components/ClientLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://shanghongmachine.com'),
    title: {
        template: '%s | 上泓機械',
        default: '上泓機械 - 專業食品機械製造商 | 工業用攪拌機 | 炒食機',
    },
    description: '上泓機械專業製造食品機械設備，主要產品包括工業用攪拌機、炒食機等食品加工設備。位於台中市，擁有20年以上專業技術經驗。',
    keywords: [
        '台灣食品機械',
        '工業用攪拌機',
        '工業用炒食機',
        '食品加工設備',
        '台灣機械製造',
        '食品機械設備',
        '上泓機械',
    ].join(', '),
    manifest: '/site.webmanifest',
    icons: {
        icon: [
            { url: '/images/logo.png' },
        ],
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
                <link rel="canonical" href="https://shanghongmachine.com" />
            </head>
            <body className={inter.className}>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    )
} 