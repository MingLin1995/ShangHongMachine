import { create } from "zustand";
import { translations } from "@/i18n/translations";

type Language = "zh" | "en";

interface LanguageStore {
  language: Language;
  translations: typeof translations.zh;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "zh",
  translations: translations.zh,
  toggleLanguage: () => {
    set((state) => {
      const newLanguage = state.language === "zh" ? "en" : "zh";
      document.documentElement.setAttribute("lang", newLanguage);
      document.title =
        newLanguage === "zh"
          ? "上泓機械 - 專業食品機械製造商"
          : "SHANG HONG MACHINE - Professional Food Machinery Manufacturer";
      return {
        language: newLanguage,
        translations: translations[newLanguage],
      };
    });
  },
}));

if (typeof window !== "undefined") {
  const savedLanguage = localStorage.getItem("language") as Language;
  if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
    useLanguageStore.setState({
      language: savedLanguage,
      translations: translations[savedLanguage],
    });
  }
}
