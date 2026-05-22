"use client"

import { useLanguageStore } from '@/stores/languageStore'

export default function About() {
    const { language, translations } = useLanguageStore()

    return (
        <section id="about" className="bg-[#fcfcfb] dark:bg-[#1a1916] py-24 lg:py-32 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-14">
                {/* Label */}
                <div className="flex items-center gap-2.5 text-[12px] font-normal text-[#993333] tracking-[0.18em] uppercase mb-4">
                    <span className="h-px w-[18px] bg-[#993333]" />
                    {language === 'zh' ? '關於我們 · ABOUT' : 'ABOUT · 關於'}
                </div>

                {/* Headline */}
                <h2 className="text-[32px] md:text-[48px] lg:text-[58px] leading-[1.08] tracking-[-0.025em] font-light text-[#0f0f0e] dark:text-[#f1ece4] m-0 mb-16 max-w-[720px] [text-wrap:balance]">
                    {language === 'zh' ? (
                        <>
                            誠信與專業，<br />
                            <span className="font-bold">是我們對客戶的承諾。</span>
                        </>
                    ) : (
                        <>
                            Integrity and craftsmanship —<br />
                            <span className="font-bold">our promise to every customer.</span>
                        </>
                    )}
                </h2>

                {/* Two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-2.5 mb-3.5">
                            <span className="text-[13px] text-[#993333] tracking-[0.1em] px-2 py-0.5 border border-[#993333] rounded-full">01</span>
                            <span className="text-[22px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4]">
                                {translations.about.story.title}
                            </span>
                        </div>
                        <p className="text-[17px] leading-[1.7] text-[#3a3a36] dark:text-[#d1ccc4] [text-wrap:pretty]">
                            {translations.about.story.content}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2.5 mb-3.5">
                            <span className="text-[13px] text-[#993333] tracking-[0.1em] px-2 py-0.5 border border-[#993333] rounded-full">02</span>
                            <span className="text-[22px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4]">
                                {translations.about.vision.title}
                            </span>
                        </div>
                        <p className="text-[17px] leading-[1.7] text-[#3a3a36] dark:text-[#d1ccc4] [text-wrap:pretty]">
                            {translations.about.vision.content}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 