import { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'

export const metadata: Metadata = {
    title: 'Industrial Food Mixer Series — SH-201/201H/301/401 (1/2HP–1.5HP)',
    description:
        'SHANG HONG MACHINE industrial food mixer series — 4 models SH-201/SH-201H/SH-301/SH-401, 1/2HP–1.5HP, 20L–40L bowl, 3kg–9kg dough. Dough hook, flat beater and wire whip for bread, dumpling wrappers, pastry, buns, jam, fillings, butter, mayo and cake. Made in Tanzi, Taichung, Taiwan.',
    alternates: {
        canonical: 'https://www.shanghong-tw.com/en/products/mixers',
        languages: {
            'zh-TW': 'https://www.shanghong-tw.com/products/mixers',
            en: 'https://www.shanghong-tw.com/en/products/mixers',
            'x-default': 'https://www.shanghong-tw.com/products/mixers',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['zh_TW'],
        siteName: 'SHANG HONG MACHINE 上泓機械',
        title: 'Industrial Food Mixer Series — SH-201/201H/301/401 (1/2HP–1.5HP)',
        description: 'Four industrial food mixers, 1/2HP–1.5HP, 20L–40L, 3–9kg dough. Dough hook, beater and whip for dough, fillings and emulsions. Made in Taiwan.',
        url: 'https://www.shanghong-tw.com/en/products/mixers',
        images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SHANG HONG MACHINE Industrial Food Mixer Series' }],
    },
}

export default function Page() {
    return <ProductPage series="mixers" lang="en" />
}
