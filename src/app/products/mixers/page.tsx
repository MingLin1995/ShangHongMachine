import { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'

export const metadata: Metadata = {
    title: '工業用攪拌機系列 SH-201／201H／301／401（1/2HP–1.5HP）',
    description:
        '上泓機械工業用攪拌機系列，4 款機型 SH-201／SH-201H／SH-301／SH-401，馬力 1/2HP 至 1.5HP、桶容量 20L 至 40L、麵糰容量 3kg 至 9kg。配備攪拌勾、攪拌扇、攪拌球，適用麵包、水餃皮、派皮、包子、果醬、餡料、奶油、美乃滋、蛋糕。台灣台中潭子製造。',
    alternates: {
        canonical: 'https://www.shanghong-tw.com/products/mixers',
        languages: {
            'zh-TW': 'https://www.shanghong-tw.com/products/mixers',
            en: 'https://www.shanghong-tw.com/en/products/mixers',
            'x-default': 'https://www.shanghong-tw.com/products/mixers',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        alternateLocale: ['en_US'],
        siteName: '上泓機械 SHANG HONG MACHINE',
        title: '工業用攪拌機系列 SH-201／201H／301／401（1/2HP–1.5HP）｜上泓機械',
        description: '4 款工業用攪拌機，1/2HP–1.5HP、20L–40L、麵糰 3–9kg。攪拌勾／扇／球，適用麵團、餡料、乳化食材。台灣製造。',
        url: 'https://www.shanghong-tw.com/products/mixers',
        images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '上泓機械 工業用攪拌機系列' }],
    },
}

export default function Page() {
    return <ProductPage series="mixers" lang="zh" />
}
