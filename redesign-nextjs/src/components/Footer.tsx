"use client"

import Image from 'next/image'
import { useLanguageStore } from '@/stores/languageStore'

export default function Footer() {
    const { language, translations } = useLanguageStore()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-[#fcfcfb] dark:bg-[#1a1916] border-t border-[#ececea] dark:border-white/5 px-6 lg:px-14 py-11 transition-colors duration-300">
            <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/logo.png"
                        alt="SH"
                        width={28}
                        height={28}
                        className="h-7 w-auto object-contain dark:brightness-0 dark:invert"
                    />
                    <div>
                        <div className="text-[13px] font-medium text-[#0f0f0e] dark:text-[#f1ece4] tracking-tight">
                            {translations.contact.company}
                        </div>
                        <div className="text-[11px] font-light text-[#737370] dark:text-[#a8a39b] mt-0.5">
                            {language === 'zh' ? '台中市潭子區' : 'Tanzi, Taichung · Taiwan'}
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex gap-5 text-[13px] text-[#3a3a36] dark:text-[#d1ccc4]">
                    <span>{translations.contact.tel.replace('TEL：', '')}</span>
                    <span>{translations.contact.email.split('：')[1]}</span>
                </div>
                <div className="text-[12px] text-[#737370] dark:text-[#a8a39b]">
                    © {currentYear} Shang Hong Machine Co., Ltd.
                </div>
            </div>
        </footer>
    )
} 