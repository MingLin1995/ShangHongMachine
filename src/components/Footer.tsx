"use client"

import { useLanguageStore } from '@/stores/languageStore'

export default function Footer() {
    const { language, translations } = useLanguageStore()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer p-10 bg-base-200 text-base-content w-full">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-center">
                    <p className="text-sm">
                        Copyright © {currentYear} {translations.contact.company}
                    </p>
                </div>
            </div>
        </footer>
    )
} 