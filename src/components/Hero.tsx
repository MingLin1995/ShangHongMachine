"use client"

import Image from 'next/image'
import { useLocale } from '@/hooks/useLocale'
import { translations as allTranslations, productData } from '@/i18n/translations'

const sh301Data = productData.mixers.models.find(m => m.model === 'SH-301') || { specs: { power: '1HP', capacity: '30L', doughCapacity: '6kg', bowlDiameter: '370mm' } };

export default function Hero() {
    const { language } = useLocale()
    const FEATURED_MODEL = 'SH-301'
    const FEATURED_IMAGE = '/images/products/mixer-301.jpg'

    const specsLabels = allTranslations[language].products.categories.mixers.specs

    const scrollToProducts = () => {
        const section = document.getElementById('cookers')
        if (section) {
            window.scrollTo({ top: section.offsetTop - 76, behavior: 'smooth' })
        }
    }

    const scrollToMixers = () => {
        const section = document.getElementById('mixers')
        if (section) {
            window.scrollTo({ top: section.offsetTop - 76, behavior: 'smooth' })
        }
    }

    return (
        <section id="top" className="relative min-h-screen bg-[#fcfcfb] dark:bg-[#1a1916] transition-colors duration-300 overflow-hidden" aria-labelledby="hero-heading">
            <div className="container mx-auto px-6 lg:px-14 pt-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center min-h-[calc(100vh-76px)]">
                {/* Left — copy */}
                <div>
                    <div className="inline-flex items-center gap-2.5 text-[12px] font-normal text-[#737370] dark:text-[#a8a39b] tracking-wider mb-7 whitespace-nowrap">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#993333]" />
                        <span>
                            {language === 'zh'
                                ? '上泓機械 SHANG HONG MACHINE · 工業用攪拌機・炒食機 · 台灣製造'
                                : 'SHANG HONG MACHINE 上泓機械 · Industrial Food Mixers & Cookers · Made in Taiwan'}
                        </span>
                    </div>

                    <h1 id="hero-heading" className="text-[38px] sm:text-[54px] lg:text-[76px] leading-[1.02] tracking-[-0.03em] text-[#0f0f0e] dark:text-[#f1ece4] m-0 [text-wrap:balance] font-light">
                        <span className="sr-only">
                            {language === 'zh'
                                ? '上泓機械 SHANG HONG MACHINE — 專業製造食品機械，攪拌機 / 炒食機。'
                                : 'SHANG HONG MACHINE — Professional food machinery manufacturer, food mixer / cooking mixer.'}
                        </span>
                        {language === 'zh' ? (
                            <>
                                專業製造<br />
                                <span className="font-bold">食品機械</span>
                            </>
                        ) : (
                            <>
                                Professional<br />
                                <span className="font-bold">Food Machinery</span>
                            </>
                        )}
                    </h1>

                    <p className="text-[18px] sm:text-[22px] leading-[1.5] text-[#3a3a36] dark:text-[#d1ccc4] mt-8 max-w-[420px] [text-wrap:pretty] font-medium">
                        {language === 'zh' ? (
                            <>
                                攪拌機 / 炒食機
                                <span className="block text-[14px] sm:text-[15px] text-[#737370] dark:text-[#a8a39b] tracking-wider uppercase font-semibold mt-1.5">
                                    FOOD MIXER / COOKING MIXER
                                </span>
                            </>
                        ) : (
                            <span className="text-[16px] sm:text-[18px] text-[#737370] dark:text-[#a8a39b] tracking-wider uppercase font-semibold">
                                FOOD MIXER / COOKING MIXER
                            </span>
                        )}
                    </p>

                    <div className="flex flex-wrap gap-2.5 mt-9">
                        <button
                            onClick={scrollToProducts}
                            className="px-[22px] py-[13px] rounded-full bg-[#993333] hover:bg-[#7a2929] text-white text-[14px] font-medium whitespace-nowrap transition-colors"
                        >
                            {language === 'zh' ? '瀏覽全系列 →' : 'Browse the catalog →'}
                        </button>
                        <a
                            href="/catalogs/shanghong-catalog.pdf"
                            download
                            className="inline-flex items-center gap-1.5 px-[22px] py-[13px] rounded-full border border-[#ececea] dark:border-white/20 bg-transparent hover:bg-[#f7f6f3] dark:hover:bg-white/5 text-[#0f0f0e] dark:text-[#f1ece4] text-[14px] font-medium whitespace-nowrap transition-colors"
                        >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {language === 'zh' ? '下載型錄' : 'Download Catalog'}
                        </a>
                    </div>
                </div>

                {/* Right — product + floating sidecard */}
                <div className="relative flex justify-center items-center min-h-[580px]">
                    {/* Soft background */}
                    <div className="absolute right-0 bottom-0 w-[92%] h-[78%] bg-[#f1f0ec] dark:bg-[#242220] rounded-3xl transition-colors duration-300" />

                    {/* Product photo */}
                    <div className="relative h-[min(580px,70vh)] w-full max-w-[600px] flex items-center justify-center z-[1]">
                        <Image
                            src={FEATURED_IMAGE}
                            alt={
                                language === 'zh'
                                    ? `${FEATURED_MODEL} 工業用攪拌機 - 上泓機械 SHANG HONG MACHINE 食品機械`
                                    : `${FEATURED_MODEL} Industrial Food Mixer - SHANG HONG MACHINE 上泓機械 Food Machinery`
                            }
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Floating spec sidecard */}
                    <div className="absolute right-0 top-6 z-[2] bg-white dark:bg-[#242220] rounded-2xl px-6 py-5 min-w-[220px] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.10)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/[0.04] dark:ring-white/5">
                        <div className="text-[11px] font-bold text-[#993333] tracking-[0.18em] uppercase">
                            {language === 'zh' ? '本月主推' : 'Featured'}
                        </div>
                        <div className="text-[28px] font-bold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] mt-1.5">{FEATURED_MODEL}</div>
                        <div className="mt-2">
                            {[
                                { k: specsLabels.power, v: sh301Data.specs.power },
                                { k: specsLabels.capacity, v: sh301Data.specs.capacity },
                                { k: specsLabels.doughCapacity, v: sh301Data.specs.doughCapacity },
                                { k: specsLabels.bowlDiameter, v: sh301Data.specs.bowlDiameter },
                            ].map((row) => (
                                <div
                                    key={row.k}
                                    className="flex justify-between items-baseline py-[12px] border-t border-[#ececea] dark:border-white/[0.08] text-[15px]"
                                >
                                    <span className="text-[#737370] dark:text-[#a8a39b] font-medium">{row.k}</span>
                                    <span className="font-bold text-[#0f0f0e] dark:text-[#f1ece4] whitespace-nowrap ml-4">{row.v}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={scrollToMixers}
                            className="block w-full mt-3.5 text-center px-3 py-2.5 rounded-full border border-[#0f0f0e] dark:border-white/15 text-[#0f0f0e] dark:text-[#f1ece4] text-[12px] font-medium hover:bg-[#f7f6f3] dark:hover:bg-white/5 transition-colors"
                        >
                            {language === 'zh' ? '查看完整規格 →' : 'View full spec →'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
