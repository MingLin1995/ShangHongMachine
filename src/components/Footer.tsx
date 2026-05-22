"use client"

import Image from 'next/image'
import { useLanguageStore } from '@/stores/languageStore'

export default function Footer() {
    const { language, translations } = useLanguageStore()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#fcfcfb] dark:bg-[#1a1916] border-t border-[#ececea] dark:border-white/5 px-6 lg:px-14 py-14 transition-colors duration-300">
            <div className="container mx-auto flex flex-wrap justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/logo.png"
                        alt="SH"
                        width={32}
                        height={32}
                        className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
                    />
                    <div>
                        <div className="text-[16px] font-bold text-[#0f0f0e] dark:text-[#f1ece4] tracking-tight">
                            {translations.contact.company}
                        </div>
                        <div className="text-[13px] font-medium text-[#737370] dark:text-[#a8a39b] mt-1">
                            {language === 'zh' ? '台中市潭子區 · 台灣製造' : 'Tanzi, Taichung · Made in Taiwan'}
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#3a3a36] dark:text-[#d1ccc4]">
                    <a
                        href={`tel:${translations.contact.tel.replace(/^[^：]+：/, '').replace(/[-\s]/g, '')}`}
                        className="hover:text-[#993333] transition-colors"
                    >
                        {translations.contact.tel.replace('TEL：', '')}
                    </a>
                    <span className="h-4 w-px bg-[#ececea] dark:bg-white/10" />
                    <a
                        href={`mailto:${translations.contact.email.split('：')[1]}`}
                        className="hover:text-[#993333] transition-colors"
                    >
                        {translations.contact.email.split('：')[1]}
                    </a>
                </div>
                <div className="text-[13px] font-medium text-[#737370] dark:text-[#a8a39b]">
                    © {currentYear} Shang Hong Machine Co., Ltd.
                </div>
            </div>
        </footer>
    )
} 