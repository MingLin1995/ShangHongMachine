"use client"

import Image from 'next/image'
import { useLanguageStore } from '@/stores/languageStore'

export default function Hero() {
    const { translations } = useLanguageStore()

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
        <div className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.webp"
                    alt="Background"
                    fill
                    className="object-cover brightness-[0.4] sepia-[0.2]"
                    priority
                    sizes="100vw"
                />
            </div>

            <div className="relative z-10 hero min-h-screen bg-gradient-to-b from-[#993333]/20 to-[#666666]/30">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <div className="mb-8 flex flex-col justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                                {translations.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md">
                                {translations.hero.subtitle}
                            </p>
                        </div>
                        <div className="relative w-full h-[300px] flex items-center justify-center mb-8">
                            <div className="absolute inset-0 bg-white/65 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg"></div>
                            <div className="relative w-[350px] h-[250px]">
                                <Image
                                    src="/images/logo.png"
                                    alt={translations.hero.title}
                                    fill
                                    className="object-contain"
                                    sizes="350px"
                                    priority={true}
                                />
                            </div>
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#993333]/50 to-transparent"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#993333]/50 to-transparent"></div>
                        </div>
                        <button
                            className="btn bg-[#993333] hover:bg-[#7a2929] text-white border-none btn-lg shadow-lg"
                            onClick={scrollToProducts}
                        >
                            {translations.hero.cta}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 