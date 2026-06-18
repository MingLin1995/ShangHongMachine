"use client"

import { ThemeProvider } from "@/contexts/ThemeContext"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    useEffect(() => {
        const lang = pathname?.startsWith('/en') ? 'en' : 'zh-TW'
        document.documentElement.setAttribute('lang', lang)
    }, [pathname])

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
