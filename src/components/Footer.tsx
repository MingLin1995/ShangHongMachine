import Image from 'next/image'
import { translations as allTranslations } from '@/i18n/translations'

// 拿掉「TEL：xxx」或「Email: xxx」這種前綴，回傳冒號後的內容；
// 同時容許半形 `:` 與全形 `：` 兩種冒號，避免翻譯被改回半形時靜默壞掉。
function stripFieldPrefix(s: string): string {
    return s.replace(/^[^：:]+[：:]\s*/, '')
}

export default function Footer({ lang }: { lang: 'zh' | 'en' }) {
    const language = lang
    const translations = allTranslations[lang]
    const currentYear = new Date().getFullYear()

    const telValue = stripFieldPrefix(translations.contact.tel)
    const telDigits = telValue.replace(/[-\s]/g, '')
    const emailValue = stripFieldPrefix(translations.contact.email)

    return (
        <footer className="bg-[#fcfcfb] dark:bg-[#1a1916] border-t border-[#ececea] dark:border-white/5 px-6 lg:px-14 py-14 transition-colors duration-300">
            <div className="container mx-auto flex flex-col gap-10">
                <div className="flex flex-wrap justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/logo.png"
                            alt={language === 'zh' ? '上泓機械 SHANG HONG MACHINE logo' : 'SHANG HONG MACHINE 上泓機械 logo'}
                            width={32}
                            height={32}
                            className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
                        />
                        <div>
                            <div className="text-[16px] font-bold text-[#0f0f0e] dark:text-[#f1ece4] tracking-tight">
                                {translations.contact.company}
                            </div>
                            <div className="text-[13px] font-medium text-[#737370] dark:text-[#a8a39b] mt-1">
                                {language === 'zh' ? '台中市潭子區 · 台灣製造' : 'Tanzi, Taichung · Made in Taiwan'}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#3a3a36] dark:text-[#d1ccc4]">
                        <a
                            href={`tel:${telDigits}`}
                            className="hover:text-[#993333] transition-colors"
                        >
                            {telValue}
                        </a>
                        <span className="h-4 w-px bg-[#ececea] dark:bg-white/10" />
                        <a
                            href={`mailto:${emailValue}`}
                            className="hover:text-[#993333] transition-colors"
                        >
                            {emailValue}
                        </a>
                    </div>
                </div>

                {/* Bilingual SEO block — visible plain text for crawlers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#ececea] dark:border-white/[0.06] text-[13px] leading-[1.7] text-[#737370] dark:text-[#a8a39b]">
                    <div>
                        <div className="font-semibold text-[#3a3a36] dark:text-[#d1ccc4] mb-1.5">上泓機械有限公司</div>
                        <div>台灣專業食品機械製造商，主力產品為工業用攪拌機與炒食機，廣泛應用於食品加工廠、餐廳、創業工作室。</div>
                        <div className="mt-2">地址：427341 台中市潭子區大富路三段 33 巷 20 號</div>
                        <div>電話：886-4-25341453 · 傳真：886-4-25341553</div>
                        <div>信箱：shanghong1002@gmail.com</div>
                    </div>
                    <div>
                        <div className="font-semibold text-[#3a3a36] dark:text-[#d1ccc4] mb-1.5">SHANG HONG MACHINE CO., LTD.</div>
                        <div>Taiwan-based professional food machinery manufacturer. Industrial food mixers and cookers for food-processing plants, restaurants, and startup kitchens.</div>
                        <div className="mt-2">Address: No. 20, Ln. 33, Sec. 3, Dafu Rd., Tanzi Dist., Taichung City 427341, Taiwan</div>
                        <div>Tel: +886-4-25341453 · Fax: +886-4-25341553</div>
                        <div>Email: shanghong1002@gmail.com</div>
                    </div>
                </div>

                <div className="text-[13px] font-medium text-[#737370] dark:text-[#a8a39b] text-center pt-2">
                    © {currentYear} Shang Hong Machine Co., Ltd. 上泓機械有限公司 · All rights reserved.
                </div>
            </div>
        </footer>
    )
}
