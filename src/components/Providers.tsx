"use client"

import { ThemeProvider } from "@/contexts/ThemeContext"
import { useEffect } from 'react'
import { useLanguageStore } from '@/stores/languageStore'

export function Providers({ children }: { children: React.ReactNode }) {
    const { language } = useLanguageStore()

    useEffect(() => {
        document.documentElement.setAttribute('lang', language)
    }, [language])

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
} 