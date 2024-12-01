"use client"

import { Providers } from "./Providers"
import { useEffect, useState } from 'react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const body = document.body
        if (body.hasAttribute('data-new-gr-c-s-check-loaded')) {
            body.removeAttribute('data-new-gr-c-s-check-loaded')
        }
        if (body.hasAttribute('data-gr-ext-installed')) {
            body.removeAttribute('data-gr-ext-installed')
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    const node = mutation.target as HTMLElement
                    const attributeName = mutation.attributeName
                    if (attributeName?.startsWith('data-gr-')) {
                        node.removeAttribute(attributeName)
                    }
                }
            })
        })

        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
        })

        setMounted(true)

        return () => {
            observer.disconnect()
        }
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="antialiased" suppressHydrationWarning>
            <Providers>
                {children}
            </Providers>
        </div>
    )
} 