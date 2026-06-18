import { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'

export const metadata: Metadata = {
    title: 'Industrial Food Cooker Series — SH-11F/11T/12T/20S (50L–300L)',
    description:
        'SHANG HONG MACHINE industrial food cooker (cooking mixer) series — 4 models: fixed type SH-11F, tilting type SH-11T/SH-12T, steam-heated tilting type SH-20S. Capacities 50L–300L for peanut candy, syrup, meat sauce, condiments, bean paste and pineapple filling. Made in Tanzi, Taichung, Taiwan.',
    alternates: {
        canonical: 'https://www.shanghong-tw.com/en/products/cookers',
        languages: {
            'zh-TW': 'https://www.shanghong-tw.com/products/cookers',
            en: 'https://www.shanghong-tw.com/en/products/cookers',
            'x-default': 'https://www.shanghong-tw.com/products/cookers',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['zh_TW'],
        siteName: 'SHANG HONG MACHINE 上泓機械',
        title: 'Industrial Food Cooker Series — SH-11F/11T/12T/20S (50L–300L)',
        description: 'Four industrial food cookers, 50L–300L, for peanut candy, meat sauce, condiments and bean paste. Made in Taiwan.',
        url: 'https://www.shanghong-tw.com/en/products/cookers',
        images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SHANG HONG MACHINE Industrial Food Cooker Series' }],
    },
}

export default function Page() {
    return <ProductPage series="cookers" lang="en" />
}
