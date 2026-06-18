"use client"

import { usePathname } from "next/navigation"
import { translations as allTranslations } from "@/i18n/translations"

export type Language = "zh" | "en"

export function useLocale() {
  const pathname = usePathname()
  const language: Language = pathname?.startsWith("/en") ? "en" : "zh"
  return {
    language,
    translations: allTranslations[language],
  }
}
