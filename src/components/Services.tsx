import ProductSeries from './ProductSeries'
export default function Services({ lang }: { lang: 'zh' | 'en' }) {
    return (
        <>
            <ProductSeries series="cookers" lang={lang} showIntro withDetailLink />
            <ProductSeries series="mixers" lang={lang} withDetailLink />
        </>
    )
}
