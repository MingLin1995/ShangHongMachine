"use client"

import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguageStore } from '@/stores/languageStore'
import Image from 'next/image'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { language, translations, toggleLanguage } = useLanguageStore()

    useEffect(() => {
        setMounted(true)
        document.title = language === 'zh' ?
            '上泓機械 - 專業食品機械製造商' :
            'SHANG HONG MACHINE - Professional Food Machinery Manufacturer'
    }, [language])

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            const navbarHeight = 80
            const sectionTop = section.offsetTop - navbarHeight
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            })
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

    return (
        <div className="w-full">
            <div className="navbar bg-white dark:bg-gray-900 shadow-lg fixed top-0 left-0 right-0 z-50 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <svg className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </div>
                        {isOpen && (
                            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white dark:bg-gray-900 rounded-lg w-52">
                                <li><button onClick={scrollToTop} className="text-gray-800 dark:text-white hover:text-primary py-2">{language === 'zh' ? '首頁' : 'Home'}</button></li>
                                <li><button onClick={() => scrollToSection('about')} className="text-gray-800 dark:text-white hover:text-primary py-2">{translations.nav.about}</button></li>
                                <li><button onClick={() => scrollToSection('services')} className="text-gray-800 dark:text-white hover:text-primary py-2">{translations.nav.products}</button></li>
                                <li><button onClick={() => scrollToSection('contact')} className="text-gray-800 dark:text-white hover:text-primary py-2">{translations.nav.contact}</button></li>
                                <li>
                                    <a
                                        href="/catalogs/shanghong-catalog.pdf"
                                        download
                                        className="text-gray-800 dark:text-white hover:text-primary py-2 flex items-center gap-2"
                                    >
                                        {translations.nav.download}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                    <button onClick={scrollToTop} className="btn btn-ghost h-20 flex items-center justify-center">
                        <div className="relative h-12 w-40 flex items-center justify-center my-auto">
                            <Image
                                src="/images/logo-title.png"
                                alt="上泓機械"
                                fill
                                className="object-contain dark:brightness-0 dark:invert"
                                priority
                                sizes="160px"
                            />
                        </div>
                    </button>
                </div>
                <div className="navbar-end">
                    <button
                        className="btn btn-ghost btn-circle text-xl"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <button
                        className="btn btn-ghost mx-2 text-gray-800 dark:text-white hover:text-primary font-semibold"
                        onClick={toggleLanguage}
                    >
                        {language === 'zh' ? 'EN' : '中'}
                    </button>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><button onClick={scrollToTop} className="text-gray-800 dark:text-white hover:text-primary font-medium px-4">{language === 'zh' ? '首頁' : 'Home'}</button></li>
                            <li><button onClick={() => scrollToSection('about')} className="text-gray-800 dark:text-white hover:text-primary font-medium px-4">{translations.nav.about}</button></li>
                            <li><button onClick={() => scrollToSection('services')} className="text-gray-800 dark:text-white hover:text-primary font-medium px-4">{translations.nav.products}</button></li>
                            <li><button onClick={() => scrollToSection('contact')} className="text-gray-800 dark:text-white hover:text-primary font-medium px-4">{translations.nav.contact}</button></li>
                            <li>
                                <a
                                    href="/catalogs/shanghong-catalog.pdf"
                                    download
                                    className="text-gray-800 dark:text-white hover:text-primary font-medium px-4 flex items-center gap-2"
                                >
                                    {translations.nav.download}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-20"></div>
        </div>
    )
} 