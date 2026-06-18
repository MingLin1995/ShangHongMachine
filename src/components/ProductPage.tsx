import Link from 'next/link'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'
import ProductSeries from './ProductSeries'
import { translations as allTranslations } from '@/i18n/translations'

type Lang = 'zh' | 'en'
type Series = 'cookers' | 'mixers'

const BASE = 'https://www.shanghong-tw.com'

const SERIES_NAME: Record<Series, { zh: string; en: string }> = {
    cookers: { zh: '工業用炒食機系列', en: 'Industrial Food Cooker Series' },
    mixers: { zh: '工業用攪拌機系列', en: 'Industrial Food Mixer Series' },
}

function pageUrl(series: Series, lang: Lang) {
    return lang === 'zh' ? `${BASE}/products/${series}` : `${BASE}/en/products/${series}`
}

function buildSchema(series: Series, lang: Lang) {
    const isZh = lang === 'zh'
    const url = pageUrl(series, lang)
    const homeUrl = isZh ? BASE : `${BASE}/en`
    const name = isZh ? SERIES_NAME[series].zh : SERIES_NAME[series].en
    const t = allTranslations[lang]

    const itemNames =
        series === 'cookers'
            ? t.products.categories.cookers.types.map((x) => `${x.model} ${x.name}`)
            : t.products.categories.mixers.models.map((x) => `${x.model} ${x.name}`)

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: isZh ? '首頁' : 'Home', item: homeUrl },
            { '@type': 'ListItem', position: 2, name, item: url },
        ],
    }

    const collection = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${url}#webpage`,
        url,
        name,
        inLanguage: isZh ? 'zh-TW' : 'en',
        isPartOf: { '@id': `${BASE}/#website` },
        about: { '@id': `${BASE}/#organization` },
        mainEntity: {
            '@type': 'ItemList',
            numberOfItems: itemNames.length,
            itemListElement: itemNames.map((n, i) => ({ '@type': 'ListItem', position: i + 1, name: n })),
        },
    }

    return JSON.stringify([breadcrumb, collection])
}

export default function ProductPage({ series, lang }: { series: Series; lang: Lang }) {
    const isZh = lang === 'zh'
    const other: Series = series === 'cookers' ? 'mixers' : 'cookers'
    const homeHref = isZh ? '/' : '/en'
    const otherHref = isZh ? `/products/${other}` : `/en/products/${other}`
    const crumbName = isZh ? SERIES_NAME[series].zh : SERIES_NAME[series].en
    const otherName = isZh ? SERIES_NAME[other].zh : SERIES_NAME[other].en

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildSchema(series, lang) }} />
            <Navbar />
            <main>
                {/* Breadcrumb */}
                <nav aria-label={isZh ? '麵包屑導覽' : 'Breadcrumb'} className="bg-[#fcfcfb] dark:bg-[#1a1916] transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-14 pt-10 pb-2 text-[13px] text-[#737370] dark:text-[#a8a39b]">
                        <Link href={homeHref} className="hover:text-[#993333] transition-colors">
                            {isZh ? '首頁' : 'Home'}
                        </Link>
                        <span className="mx-2" aria-hidden>/</span>
                        <span className="text-[#3a3a36] dark:text-[#d1ccc4]" aria-current="page">{crumbName}</span>
                    </div>
                </nav>

                <ProductSeries series={series} lang={lang} detailed />

                {/* Cross-link to the other series */}
                <section className="bg-[#fcfcfb] dark:bg-[#1a1916] py-16 border-t border-[#ececea] dark:border-white/[0.06] transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-14 flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <div className="text-[12px] font-normal text-[#993333] tracking-[0.18em] uppercase mb-2">
                                {isZh ? '其他系列' : 'Other series'}
                            </div>
                            <div className="text-[22px] md:text-[26px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4]">
                                {otherName}
                            </div>
                        </div>
                        <Link
                            href={otherHref}
                            className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full bg-[#993333] hover:bg-[#7a2929] text-white text-[14px] font-medium transition-colors"
                        >
                            {isZh ? `查看${otherName}` : `View the ${otherName.toLowerCase()}`}
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer lang={lang} />
        </>
    )
}
