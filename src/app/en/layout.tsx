import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        template: '%s | SHANG HONG MACHINE 上泓機械',
        default: 'SHANG HONG MACHINE 上泓機械 - Professional Food Machinery Manufacturer in Taiwan',
    },
    description: 'SHANG HONG MACHINE (上泓機械) is a professional food machinery manufacturer based in Taichung, Taiwan. Specializing in industrial food mixers, cookers, and food processing equipment with over 20 years of experience.',
    keywords: [
        'SHANG HONG MACHINE',
        'shang hong machine',
        'Shang Hong Machine',
        'ShangHong',
        '上泓機械',
        '上泓機械有限公司',
        'food machinery',
        'food mixer',
        'industrial mixer',
        'food cooker',
        'industrial cooker',
        'food processing equipment',
        'Taiwan food machinery',
        'Taiwan machinery manufacturer',
        'commercial mixer',
        'dough mixer',
        'food machine Taiwan',
        'industrial food machine',
    ],
    alternates: {
        canonical: 'https://www.shanghong-tw.com/en',
        languages: {
            'zh-TW': 'https://www.shanghong-tw.com',
            'en': 'https://www.shanghong-tw.com/en',
            'x-default': 'https://www.shanghong-tw.com',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['zh_TW'],
        siteName: 'SHANG HONG MACHINE 上泓機械',
        title: 'SHANG HONG MACHINE - Professional Food Machinery Manufacturer in Taiwan',
        description: 'Taiwan-based professional food machinery manufacturer. Specializing in industrial food mixers and cookers. Over 20 years of experience.',
        url: 'https://www.shanghong-tw.com/en',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SHANG HONG MACHINE - Professional Food Machinery Manufacturer in Taiwan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SHANG HONG MACHINE - Professional Food Machinery Manufacturer in Taiwan',
        description: 'Taiwan-based professional food machinery manufacturer. Industrial food mixers and cookers.',
        images: ['/images/og-image.png'],
    },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
