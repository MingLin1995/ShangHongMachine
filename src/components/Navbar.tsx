"use client"

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguageStore } from '@/stores/languageStore'
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { language, translations, toggleLanguage } = useLanguageStore()

    useEffect(() => {
        setMounted(true)
        document.title = language === 'zh'
            ? '上泓機械 - 專業食品機械製造商'
            : 'SHANG HONG MACHINE - Professional Food Machinery Manufacturer'
    }, [language])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            const navbarHeight = 76
            const sectionTop = section.offsetTop - navbarHeight
            window.scrollTo({ top: sectionTop, behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState({}, '', '/')
    }

    if (!mounted) {
        return null
    }

    const links = [
        { id: 'top', label: language === 'zh' ? '首頁' : 'Home', onClick: scrollToTop },
        { id: 'about', label: translations.nav.about, onClick: () => scrollToSection('about') },
        { id: 'cookers', label: language === 'zh' ? '炒食機' : 'Cookers', onClick: () => scrollToSection('cookers') },
        { id: 'mixers', label: language === 'zh' ? '攪拌機' : 'Mixers', onClick: () => scrollToSection('mixers') },
        { id: 'contact', label: translations.nav.contact, onClick: () => scrollToSection('contact') },
    ]

    return (
        <div className="w-full">
            <nav className={`fixed top-0 left-0 right-0 z-50 h-[76px] flex items-center justify-between px-6 lg:px-14 transition-all duration-200 ${scrolled
                ? 'bg-white/85 dark:bg-[#1a1916]/90 backdrop-blur-lg backdrop-saturate-150 border-b border-[#ececea] dark:border-white/5'
                : 'bg-transparent border-b border-transparent'
                }`}>
                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 text-gray-800 dark:text-[#f1ece4]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="menu"
                >
                    {isOpen ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    )}
                </button>

                {/* Brand */}
                <button onClick={scrollToTop} className="flex items-center gap-3.5 group">
                    <Image
                        src="/images/logo.png"
                        alt="上泓機械"
                        width={40}
                        height={40}
                        className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
                        priority
                    />
                    <span className="text-left leading-tight">
                        <span className="block font-bold text-[18px] tracking-tight text-[#0f0f0e] dark:text-[#f1ece4]">上泓機械</span>
                        <span className="block font-medium text-[12px] tracking-wide text-[#737370] dark:text-[#a8a39b] mt-0.5 uppercase">SHANG HONG MACHINE</span>
                    </span>
                </button>

                {/* Desktop centered nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={l.onClick}
                            className="text-[15px] font-medium text-[#3a3a36] dark:text-[#d1ccc4] hover:text-[#993333] dark:hover:text-[#ff9999] transition-colors duration-200"
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <button
                        className="h-10 w-10 flex items-center justify-center rounded-full text-[#0f0f0e] dark:text-[#f1ece4] hover:bg-[#f7f6f3] dark:hover:bg-white/5 transition-colors"
                        onClick={toggleTheme}
                        aria-label="theme"
                    >
                        {theme === 'light' ? '☾' : '☀'}
                    </button>
                    <button
                        className="px-5 py-2.5 rounded-full border border-[#0f0f0e] dark:border-white/20 text-[14px] font-bold text-[#0f0f0e] dark:text-[#f1ece4] hover:bg-[#f7f6f3] dark:hover:bg-white/5 transition-colors"
                        onClick={toggleLanguage}
                    >
                        {language === 'zh' ? 'EN' : '中'}
                    </button>
                    <a
                        href="/catalogs/shanghong-catalog.pdf"
                        download
                        className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#993333] hover:bg-[#7a2929] text-white text-[14px] font-bold transition-colors"
                    >
                        {translations.nav.download}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>

                {/* Mobile dropdown */}
                {isOpen && (
                    <div className="lg:hidden absolute top-[76px] left-4 right-4 bg-white dark:bg-[#1a1916] border border-[#ececea] dark:border-white/5 rounded-2xl p-2.5 shadow-xl flex flex-col gap-0.5">
                        {links.map((l) => (
                            <button
                                key={l.id}
                                onClick={l.onClick}
                                className="text-left px-4 py-3 rounded-xl text-[14px] text-[#3a3a36] dark:text-[#d1ccc4] hover:bg-[#f7f6f3] dark:hover:bg-white/5"
                            >
                                {l.label}
                            </button>
                        ))}
                        <a
                            href="/catalogs/shanghong-catalog.pdf"
                            download
                            className="mt-1.5 mx-1.5 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#993333] hover:bg-[#7a2929] text-white text-[13px] font-medium"
                        >
                            {translations.nav.download}
                        </a>
                    </div>
                )}
            </nav>
            <div className="h-[76px]" />
        </div>
    )
} 