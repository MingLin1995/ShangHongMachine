import Image from 'next/image'
import Link from 'next/link'
import { translations as allTranslations } from '@/i18n/translations'

type Lang = 'zh' | 'en'
type Series = 'cookers' | 'mixers'

function parseSpecBlock(text: string) {
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)
    const intro: string[] = []
    const groups: { title: string; subtitle: string; items: string[]; paras: string[] }[] = []
    let cur: { title: string; subtitle: string; items: string[]; paras: string[] } | null = null
    for (const line of lines) {
        const head = line.match(/^[【[](.+?)[】\]](.*)$/)
        if (head) {
            cur = { title: head[1].trim(), subtitle: head[2].trim(), items: [], paras: [] }
            groups.push(cur)
        } else if (line.startsWith('・')) {
            const item = line.replace(/^・/, '').trim()
            if (cur) cur.items.push(item)
            else intro.push(item)
        } else if (cur) {
            cur.paras.push(line)
        } else {
            intro.push(line)
        }
    }
    return { intro, groups }
}

function SeriesSpec({ heading, text }: { heading: string; text: string }) {
    const { intro, groups } = parseSpecBlock(text)
    return (
        <div className="mt-14 pt-12 border-t border-[#ececea] dark:border-white/[0.08]">
            <h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] m-0">
                {heading}
            </h2>
            {intro.map((p, i) => (
                <p key={i} className="text-[16px] md:text-[17px] leading-[1.7] text-[#3a3a36] dark:text-[#d1ccc4] mt-3 max-w-[760px] [text-wrap:pretty]">
                    {p}
                </p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7 mt-8">
                {groups.map((g, i) => (
                    <div key={i}>
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <h3 className="text-[15px] font-bold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] m-0">{g.title}</h3>
                            {g.subtitle && (
                                <span className="text-[13px] font-medium text-[#993333]">{g.subtitle}</span>
                            )}
                        </div>
                        {g.paras.map((p, j) => (
                            <p key={j} className="text-[14px] leading-[1.65] text-[#737370] dark:text-[#a8a39b] mt-1.5 [text-wrap:pretty]">
                                {p}
                            </p>
                        ))}
                        {g.items.length > 0 && (
                            <ul className="mt-2 space-y-1">
                                {g.items.map((it, j) => (
                                    <li key={j} className="text-[14px] leading-[1.6] text-[#3a3a36] dark:text-[#d1ccc4] pl-4 relative before:content-['・'] before:absolute before:left-0 before:text-[#993333]">
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

function SectionHeader({
    id,
    as = 'h2',
    num,
    total,
    label,
    labelEn,
    title,
    titleEm,
    meta,
    srOnlyPrefix,
}: {
    id: string
    as?: 'h1' | 'h2'
    num: string
    total: string
    label: string
    labelEn: string
    title: string
    titleEm: string
    meta: string
    srOnlyPrefix: string
}) {
    const Heading = as
    return (
        <div className="flex flex-wrap justify-between items-end gap-8 mb-12">
            <div className="max-w-[720px]">
                <div className="flex items-center gap-2.5 text-[12px] font-normal text-[#993333] tracking-[0.18em] uppercase mb-4">
                    <span className="h-px w-[18px] bg-[#993333]" />
                    {label} — {labelEn}
                </div>
                <Heading id={id} className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.025em] font-light text-[#0f0f0e] dark:text-[#f1ece4] m-0 [text-wrap:balance]">
                    <span className="sr-only">{srOnlyPrefix}</span>
                    {title}
                    <span className="font-bold">{titleEm}</span>
                </Heading>
            </div>
            <div className="text-right text-[13px] text-[#3a3a36] dark:text-[#d1ccc4] pb-2">
                <div>
                    <span className="text-[28px] font-light tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] mr-1.5">{num}</span>
                    / {total}
                </div>
                <div>{meta}</div>
            </div>
        </div>
    )
}

const META: Record<Series, {
    zh: { label: string; title: string; titleEm: string }
    en: { label: string; title: string; titleEm: string }
    num: string
    bg: string
    seriesLabelZh: string
    seriesLabelEn: string
    metaZh: string
    metaEn: string
}> = {
    cookers: {
        zh: { label: '炒食機系列', title: '均勻拌炒，', titleEm: '品質保證。' },
        en: { label: 'Cooking Mixer Series', title: 'Even cooking, ', titleEm: 'quality assured.' },
        num: '01',
        bg: 'bg-[#f7f6f3] dark:bg-[#161412]',
        seriesLabelZh: '工業用炒食機系列',
        seriesLabelEn: 'Industrial Food Cooker Series',
        metaZh: '4 款機型 · 50L → 300L',
        metaEn: '4 models · 50L → 300L',
    },
    mixers: {
        zh: { label: '攪拌機系列', title: '一機多用，', titleEm: '創造更多可能。' },
        en: { label: 'Food Mixer Series', title: 'One machine, ', titleEm: 'many possibilities.' },
        num: '02',
        bg: 'bg-[#fcfcfb] dark:bg-[#1a1916]',
        seriesLabelZh: '工業用攪拌機系列',
        seriesLabelEn: 'Industrial Food Mixer Series',
        metaZh: '4 款機型 · 1/2HP → 1.5HP',
        metaEn: '4 models · 1/2HP → 1.5HP',
    },
}

export default function ProductSeries({
    series,
    lang,
    detailed = false,
    withDetailLink = false,
    showIntro = false,
}: {
    series: Series
    lang: Lang
    detailed?: boolean
    withDetailLink?: boolean
    showIntro?: boolean
}) {
    const isZh = lang === 'zh'
    const t = allTranslations[lang]
    const cfg = META[series]
    const cat = t.products.categories[series]
    const detailHref = isZh ? `/products/${series}` : `/en/products/${series}`

    return (
        <section id={series} className={`${cfg.bg} py-24 transition-colors duration-300`} aria-labelledby={`${series}-heading`}>
            <div className="container mx-auto px-6 lg:px-14">
                <SectionHeader
                    id={`${series}-heading`}
                    as={detailed ? 'h1' : 'h2'}
                    num={cfg.num}
                    total="02"
                    label={isZh ? cfg.zh.label : cfg.en.label}
                    labelEn={isZh ? cfg.en.label : cfg.zh.label}
                    title={isZh ? cfg.zh.title : cfg.en.title}
                    titleEm={isZh ? cfg.zh.titleEm : cfg.en.titleEm}
                    meta={isZh ? cfg.metaZh : cfg.metaEn}
                    srOnlyPrefix={
                        isZh
                            ? `${cfg.seriesLabelZh} ${cfg.seriesLabelEn} — `
                            : `${cfg.seriesLabelEn} ${cfg.seriesLabelZh} — `
                    }
                />

                {showIntro && (
                    <div className="-mt-4 mb-12 max-w-[760px]">
                        <p className="text-[18px] md:text-[20px] leading-[1.5] font-medium text-[#0f0f0e] dark:text-[#f1ece4] [text-wrap:balance]">
                            {t.products.intro}
                        </p>
                        <p className="text-[16px] md:text-[17px] leading-[1.7] text-[#3a3a36] dark:text-[#d1ccc4] mt-3 [text-wrap:pretty]">
                            {t.products.description}
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                    {series === 'cookers'
                        ? t.products.categories.cookers.types.map((type, i) => {
                            const altText = isZh
                                ? `${type.model} ${type.name}工業用炒食機 - 上泓機械 SHANG HONG MACHINE 食品機械`
                                : `${type.model} ${type.name} Industrial Food Cooker - SHANG HONG MACHINE 上泓機械 Food Machinery`
                            return (
                                <article
                                    key={i}
                                    className="group bg-white dark:bg-[#242220] rounded-3xl p-[22px] border border-[#ececea] dark:border-white/[0.06] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
                                >
                                    <div className="text-[13px] font-bold text-[#993333] tracking-[0.16em] uppercase">{type.model}</div>
                                    <div className="w-full aspect-square bg-[#f7f6f3] dark:bg-[#1a1916] rounded-2xl flex items-center justify-center p-4 relative">
                                        <Image
                                            src={type.image}
                                            alt={altText}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <h3 className="text-[24px] font-bold leading-tight tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] m-0">
                                            <span className="sr-only">{isZh ? '工業用炒食機 ' : 'Industrial Food Cooker '}</span>
                                            {type.name}
                                        </h3>
                                        <div className="mt-4 space-y-2.5">
                                            <div className="flex justify-between text-[15px] border-b border-[#ececea] dark:border-white/[0.06] pb-2">
                                                <span className="text-[#737370] dark:text-[#a8a39b] font-medium">{t.products.categories.cookers.specs.capacity}</span>
                                                <span className="text-[#0f0f0e] dark:text-[#f1ece4] font-bold text-right">{type.specs.capacity.join(' / ')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                        : t.products.categories.mixers.models.map((m, i) => {
                            const altText = isZh
                                ? `${m.model} 工業用攪拌機 - 上泓機械 SHANG HONG MACHINE 食品機械`
                                : `${m.model} Industrial Food Mixer - SHANG HONG MACHINE 上泓機械 Food Machinery`
                            const mixers = t.products.categories.mixers
                            return (
                                <article
                                    key={i}
                                    className="group bg-white dark:bg-[#242220] rounded-3xl p-[22px] border border-[#ececea] dark:border-white/[0.06] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
                                >
                                    <div className="text-[13px] font-bold text-[#993333] tracking-[0.16em] uppercase">{m.model}</div>
                                    <div className="w-full aspect-square bg-[#f7f6f3] dark:bg-[#1a1916] rounded-2xl flex items-center justify-center p-4 relative">
                                        <Image
                                            src={m.image}
                                            alt={altText}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <h3 className="text-[22px] font-bold leading-tight tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] mb-4 m-0">
                                            <span className="sr-only">{isZh ? '工業用攪拌機 ' : 'Industrial Food Mixer '}</span>
                                            {isZh ? '攪拌機' : 'Food Mixer'}
                                        </h3>

                                        <div className="space-y-2.5">
                                            {[
                                                { label: mixers.specs.power, value: m.specs.power },
                                                { label: mixers.specs.capacity, value: m.specs.capacity },
                                                { label: mixers.specs.doughCapacity, value: m.specs.doughCapacity },
                                                { label: mixers.specs.bowlDiameter, value: m.specs.bowlDiameter },
                                                { label: mixers.specs.bowlDepth, value: m.specs.bowlDepth },
                                                { label: mixers.specs.dimensions, value: m.specs.dimensions },
                                                { label: mixers.specs.weight, value: m.specs.weight },
                                            ].map((spec, idx) => (
                                                <div key={idx} className="flex justify-between text-[15px] border-b border-[#ececea] dark:border-white/[0.06] pb-2 last:border-0">
                                                    <span className="text-[#737370] dark:text-[#a8a39b] font-medium">{spec.label}</span>
                                                    <span className="text-[#0f0f0e] dark:text-[#f1ece4] font-bold text-right">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                </div>

                {detailed && (
                    <SeriesSpec
                        heading={
                            series === 'cookers'
                                ? (isZh ? '應用範圍與機台特色' : 'Applications & Features')
                                : (isZh ? '攪拌配件與應用範圍' : 'Attachments & Applications')
                        }
                        text={cat.description}
                    />
                )}

                {withDetailLink && (
                    <div className="mt-10">
                        <Link
                            href={detailHref}
                            className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full border border-[#0f0f0e] dark:border-white/20 text-[#0f0f0e] dark:text-[#f1ece4] text-[14px] font-medium hover:bg-[#f7f6f3] dark:hover:bg-white/5 transition-colors"
                        >
                            {series === 'cookers'
                                ? (isZh ? '查看炒食機完整系列與應用' : 'View the full cooking mixer series')
                                : (isZh ? '查看攪拌機完整系列與應用' : 'View the full food mixer series')}
                            <span aria-hidden>→</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
