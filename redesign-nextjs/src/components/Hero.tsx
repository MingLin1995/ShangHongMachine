"use client"

import Image from 'next/image'
import { useLanguageStore } from '@/stores/languageStore'

const FEATURED = {
    model: 'SH-301',
    image: '/images/products/mixer-301.jpg',
    specs: {
        zh: { power: '1 HP', capacity: '30 公升', dough: '6 公斤', bowl: '370 mm' },
        en: { power: '1 HP', capacity: '30 L', dough: '6 kg', bowl: 'Ø 370mm' },
    },
}

export default function Hero() {
    const { language } = useLanguageStore()
    const specs = FEATURED.specs[language]

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
        <section id="top" className="relative min-h-screen bg-[#fcfcfb] dark:bg-[#1a1916] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-14 pt-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center min-h-[calc(100vh-76px)]">
                {/* Left — copy */}
                <div>
                    <div className="inline-flex items-center gap-2.5 text-[12px] font-normal text-[#737370] dark:text-[#a8a39b] tracking-wider mb-7 whitespace-nowrap">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#993333]" />
                        <span>{language === 'zh' ? '8 款主力機型 · 2 大系列 · 台灣製造' : '8 PRODUCTS · 2 SERIES · MADE IN TAIWAN'}</span>
                    </div>

                    <h1 className="text-[48px] sm:text-[60px] lg:text-[80px] leading-[0.98] tracking-[-0.035em] text-[#0f0f0e] dark:text-[#f1ece4] m-0 [text-wrap:balance] font-light">
                        {language === 'zh' ? (
                            <>
                                專為料理<span className="text-[#737370] dark:text-[#a8a39b]">，</span>
                                <br />
                                而生的<span className="font-bold">食品機械。</span>
                            </>
                        ) : (
                            <>
                                Built for<br />
                                the rhythm of<br />
                                <span className="font-bold">professional kitchens.</span>
                            </>
                        )}
                    </h1>

                    <p className="text-[17px] leading-[1.6] text-[#3a3a36] dark:text-[#d1ccc4] mt-8 max-w-[420px] [text-wrap:pretty]">
                        {language === 'zh'
                            ? '工業用攪拌機與炒食機，為食品加工廠、餐廳、創業工作室打造，從台中潭子出貨。'
                            : 'Industrial mixers and cooking mixers, built for food-processing plants, restaurants and startup kitchens — shipped from Tanzi, Taichung.'}
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
                            src={FEATURED.image}
                            alt={FEATURED.model}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Floating spec sidecard */}
                    <div className="absolute right-0 top-6 z-[2] bg-white dark:bg-[#242220] rounded-2xl px-6 py-5 min-w-[220px] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.10)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.5)] ring-1 ring-black/[0.04] dark:ring-white/5">
                        <div className="text-[10px] font-medium text-[#993333] tracking-[0.18em] uppercase">
                            {language === 'zh' ? '本月主推' : 'Featured'}
                        </div>
                        <div className="text-[24px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] mt-1.5">{FEATURED.model}</div>
                        <div className="mt-2">
                            {[
                                { k: language === 'zh' ? '馬力' : 'Power', v: specs.power },
                                { k: language === 'zh' ? '容量' : 'Capacity', v: specs.capacity },
                                { k: language === 'zh' ? '麵糰量' : 'Dough', v: specs.dough },
                                { k: language === 'zh' ? '桶直徑' : 'Bowl', v: specs.bowl },
                            ].map((row) => (
                                <div
                                    key={row.k}
                                    className="flex justify-between items-baseline py-[11px] border-t border-[#ececea] dark:border-white/[0.08] text-[13px]"
                                >
                                    <span className="text-[#737370] dark:text-[#a8a39b]">{row.k}</span>
                                    <span className="font-medium text-[#0f0f0e] dark:text-[#f1ece4] whitespace-nowrap">{row.v}</span>
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