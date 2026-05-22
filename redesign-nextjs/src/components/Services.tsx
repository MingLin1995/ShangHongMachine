"use client"

import Image from 'next/image'
import { useLanguageStore } from '@/stores/languageStore'

function SectionHeader({
    num,
    total,
    label,
    labelEn,
    title,
    titleEm,
    meta,
}: {
    num: string
    total: string
    label: string
    labelEn: string
    title: string
    titleEm: string
    meta: string
}) {
    return (
        <div className="flex flex-wrap justify-between items-end gap-8 mb-12">
            <div className="max-w-[720px]">
                <div className="flex items-center gap-2.5 text-[12px] font-normal text-[#993333] tracking-[0.18em] uppercase mb-4">
                    <span className="h-px w-[18px] bg-[#993333]" />
                    {label} — {labelEn}
                </div>
                <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.025em] font-light text-[#0f0f0e] dark:text-[#f1ece4] m-0 [text-wrap:balance]">
                    {title}
                    <span className="font-bold">{titleEm}</span>
                </h2>
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

export default function Services() {
    const { language, translations } = useLanguageStore()

    const cookers = translations.products.categories.cookers
    const mixers = translations.products.categories.mixers

    return (
        <>
            {/* === Cooking Mixer Series === */}
            <section id="cookers" className="bg-[#f7f6f3] dark:bg-[#161412] py-24 transition-colors duration-300">
                <div className="container mx-auto px-6 lg:px-14">
                    <SectionHeader
                        num="01"
                        total="02"
                        label={language === 'zh' ? '炒食機系列' : 'Cooking Mixer Series'}
                        labelEn={language === 'zh' ? 'Cooking Mixer Series' : '炒食機系列'}
                        title={language === 'zh' ? '均勻拌炒，' : 'Even cooking, '}
                        titleEm={language === 'zh' ? '品質保證。' : 'quality assured.'}
                        meta={language === 'zh' ? '4 款機型 · 50L → 300L' : '4 models · 50L → 300L'}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                        {cookers.types.map((type, i) => (
                            <div
                                key={i}
                                className="group bg-white dark:bg-[#242220] rounded-3xl p-[22px] border border-[#ececea] dark:border-white/[0.06] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
                            >
                                <div className="text-[11px] font-medium text-[#993333] tracking-[0.16em] uppercase">{type.model}</div>
                                <div className="w-full aspect-square bg-[#f7f6f3] dark:bg-[#1a1916] rounded-2xl flex items-center justify-center p-4 relative">
                                    <Image
                                        src={type.image}
                                        alt={type.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="mt-1">
                                    <div className="text-[22px] font-medium leading-tight tracking-tight text-[#0f0f0e] dark:text-[#f1ece4]">{type.name}</div>
                                    <div className="text-[13px] text-[#737370] dark:text-[#a8a39b] mt-1">
                                        {type.specs.capacity.join(' · ')}
                                    </div>
                                </div>
                                <div className="flex justify-between items-baseline border-t border-[#ececea] dark:border-white/[0.06] pt-3 mt-0.5">
                                    <span className="text-[12px] text-[#737370] dark:text-[#a8a39b]">
                                        {language === 'zh' ? '可選容量' : 'Available'}
                                    </span>
                                    <span className="text-[14px] font-medium text-[#0f0f0e] dark:text-[#f1ece4] whitespace-nowrap">
                                        {type.specs.capacity.length} {language === 'zh' ? '種規格' : 'sizes'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Food Mixer Series === */}
            <section id="mixers" className="bg-[#fcfcfb] dark:bg-[#1a1916] py-24 transition-colors duration-300">
                <div className="container mx-auto px-6 lg:px-14">
                    <SectionHeader
                        num="02"
                        total="02"
                        label={language === 'zh' ? '攪拌機系列' : 'Food Mixer Series'}
                        labelEn={language === 'zh' ? 'Food Mixer Series' : '攪拌機系列'}
                        title={language === 'zh' ? '一機多用，' : 'One machine, '}
                        titleEm={language === 'zh' ? '創造更多可能。' : 'many possibilities.'}
                        meta={language === 'zh' ? '4 款機型 · 1/2HP → 1.5HP' : '4 models · 1/2HP → 1.5HP'}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
                        {mixers.models.map((m, i) => (
                            <div
                                key={i}
                                className="group bg-white dark:bg-[#242220] rounded-3xl p-[22px] border border-[#ececea] dark:border-white/[0.06] flex flex-col gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.10)] dark:hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
                            >
                                <div className="text-[11px] font-medium text-[#993333] tracking-[0.16em] uppercase">{m.model}</div>
                                <div className="w-full aspect-square bg-[#f7f6f3] dark:bg-[#1a1916] rounded-2xl flex items-center justify-center p-4 relative">
                                    <Image
                                        src={m.image}
                                        alt={m.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="mt-1">
                                    <div className="text-[22px] font-medium leading-tight tracking-tight text-[#0f0f0e] dark:text-[#f1ece4]">
                                        {language === 'zh' ? '攪拌機' : 'Food Mixer'}
                                    </div>
                                    <div className="text-[13px] text-[#737370] dark:text-[#a8a39b] mt-1">
                                        {m.specs.power} · {m.specs.capacity} · {m.specs.doughCapacity} {language === 'zh' ? '麵糰' : 'dough'}
                                    </div>
                                </div>
                                <div className="flex justify-between items-baseline border-t border-[#ececea] dark:border-white/[0.06] pt-3 mt-0.5">
                                    <span className="text-[12px] text-[#737370] dark:text-[#a8a39b]">
                                        {language === 'zh' ? '桶直徑' : 'Bowl Ø'}
                                    </span>
                                    <span className="text-[14px] font-medium text-[#0f0f0e] dark:text-[#f1ece4] whitespace-nowrap">
                                        {m.specs.bowlDiameter}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
} 