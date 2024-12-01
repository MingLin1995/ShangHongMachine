"use client"

import Image from 'next/image'
import { useLanguageStore } from '@/stores/languageStore'
import { useState } from 'react'

export default function Hero() {
    const { translations } = useLanguageStore()
    const [showModal, setShowModal] = useState(false)

    const scrollToProducts = () => {
        const productsSection = document.getElementById('services')
        if (productsSection) {
            const navbarHeight = 80
            const sectionTop = productsSection.offsetTop - navbarHeight
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="hero min-h-screen bg-white dark:bg-gray-900">
            <div className="hero-content text-center">
                <div className="max-w-3xl">
                    <div className="mb-8 h-32 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 whitespace-nowrap">
                            {translations.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                            {translations.hero.subtitle}
                        </p>
                    </div>
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                        <div className="relative w-[400px] h-[300px]">
                            <Image
                                src="/images/logo.png"
                                alt={translations.hero.title}
                                fill
                                className="object-contain"
                                sizes="400px"
                                priority={true}
                            />
                        </div>
                    </div>
                    <button
                        className="btn btn-primary text-white mt-4"
                        onClick={scrollToProducts}
                    >
                        {translations.hero.cta}
                    </button>
                </div>
            </div>
        </div>
    )
} 