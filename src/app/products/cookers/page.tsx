import { Metadata } from 'next'
import ProductPage from '@/components/ProductPage'

export const metadata: Metadata = {
    title: '工業用炒食機系列 SH-11F／11T／12T／20S（50L–300L）',
    description:
        '上泓機械工業用炒食機系列，4 款機型：固定式 SH-11F、傾倒式 SH-11T／SH-12T、蒸氣加熱傾倒式 SH-20S，容量 50L 至 300L。適用花生糖、糖水、肉燥、各式醬料、豆沙餡、鳳梨餡等食品加工，台灣台中潭子製造。',
    alternates: {
        canonical: 'https://www.shanghong-tw.com/products/cookers',
        languages: {
            'zh-TW': 'https://www.shanghong-tw.com/products/cookers',
            en: 'https://www.shanghong-tw.com/en/products/cookers',
            'x-default': 'https://www.shanghong-tw.com/products/cookers',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        alternateLocale: ['en_US'],
        siteName: '上泓機械 SHANG HONG MACHINE',
        title: '工業用炒食機系列 SH-11F／11T／12T／20S（50L–300L）｜上泓機械',
        description: '4 款工業用炒食機，容量 50L–300L，適用花生糖、肉燥、醬料、豆沙餡等食品加工。台灣製造。',
        url: 'https://www.shanghong-tw.com/products/cookers',
        images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '上泓機械 工業用炒食機系列' }],
    },
}

export default function Page() {
    return <ProductPage series="cookers" lang="zh" />
}
