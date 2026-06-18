"use client"

import { useState } from 'react'
import { useLocale } from '@/hooks/useLocale'

type FaqItem = { q: string; a: string }

const FAQ_ZH: FaqItem[] = [
    {
        q: '上泓機械的攪拌機可以做麵團嗎？',
        a: '可以。SH-201、SH-201H、SH-301、SH-401 系列工業用攪拌機皆配備攪拌勾配件，適用於麵包、水餃皮、派皮、包子等麵團製作，麵糰處理容量從 3 公斤到 9 公斤不等，能滿足從創業工作室到中大型食品加工廠的需求。',
    },
    {
        q: '炒食機的容量規格有哪些？',
        a: '上泓機械工業用炒食機共有 4 款機型：SH-11F（固定式）、SH-11T 與 SH-12T（傾倒式）、SH-20S（蒸氣加熱傾倒式）。容量規格從 50L、80L、150L、200L 到 300L 不等，適用於糖果類（花生糖、糖水）、調味類（肉燥、各式醬料）與餡料類（豆沙餡、鳳梨餡）製作。',
    },
    {
        q: '攪拌機跟炒食機有什麼差別？',
        a: '攪拌機（Food Mixer）主要用於攪拌混合，含三種配件：攪拌勾處理麵團、攪拌扇處理餡料、攪拌球處理乳化食材。炒食機（Cooking Mixer）則同時具備攪拌與加熱功能，適合需要邊炒邊拌的食品加工，如花生糖、肉燥、豆沙餡等。',
    },
    {
        q: '如何詢價或索取產品型錄？',
        a: '可透過本頁聯絡表單留下需求、來電 886-4-25341453，或寄信至 shanghong1002@gmail.com。另外可點選頁面右上方「型錄下載」直接下載 PDF 完整產品型錄。',
    },
    {
        q: '是否提供國際出口或外銷服務？',
        a: '是。上泓機械的工業食品機械已外銷多國，提供國際出口服務。歡迎海外食品加工業者來信洽詢規格、運送與報關事宜，公司同仁可以中文、英文、台語溝通。',
    },
    {
        q: '工廠位置在哪裡？是否可以現場參觀？',
        a: '上泓機械有限公司位於 427341 台中市潭子區大富路三段 33 巷 20 號，自家工廠台灣製造。歡迎事先預約後到廠參觀並現場確認機台規格。',
    },
    {
        q: '機台是否符合食品安全規範？',
        a: '是。上泓機械所有工業用攪拌機與炒食機皆採用食品級不鏽鋼材質，設計上方便清潔維護，並符合食品加工衛生規範，可放心應用於食品加工廠、餐廳等場域。',
    },
]

const FAQ_EN: FaqItem[] = [
    {
        q: 'Can SHANG HONG MACHINE mixers handle dough?',
        a: 'Yes. The SH-201, SH-201H, SH-301, and SH-401 industrial food mixers all come with a dough hook attachment for bread, dumpling wrappers, pastry, and bun dough. Dough capacities range from 3 kg to 9 kg — suitable for startup kitchens through to mid- and large-scale food processing plants.',
    },
    {
        q: 'What capacities do your industrial food cookers come in?',
        a: 'SHANG HONG MACHINE offers four cooking mixer models: SH-11F (fixed type), SH-11T and SH-12T (tilting type), and SH-20S (steam-heated tilting type). Capacities range from 50L, 80L, 150L, 200L up to 300L. Applications include confectionery (peanut candy, syrup), seasonings (meat sauce, condiments) and fillings (bean paste, pineapple).',
    },
    {
        q: 'What is the difference between a food mixer and a cooking mixer?',
        a: 'A food mixer (攪拌機) handles mixing only, with three attachments: dough hook for dough, flat beater for fillings, and wire whip for emulsions. A cooking mixer (炒食機) combines mixing with heating — ideal for processes that require stirring while cooking, such as peanut candy, meat sauce, and bean paste.',
    },
    {
        q: 'How do I request a quote or get the product catalog?',
        a: 'You can use the contact form on this page, call +886-4-25341453, or email shanghong1002@gmail.com. You can also click "Download Catalog" at the top of the page to grab the complete product PDF.',
    },
    {
        q: 'Do you ship internationally?',
        a: 'Yes. SHANG HONG MACHINE industrial food machinery is exported to multiple countries. Overseas food processing businesses are welcome to contact us for specifications, shipping, and customs details. Our team can communicate in English, Chinese, and Taiwanese.',
    },
    {
        q: 'Where is your factory? Can we visit?',
        a: 'SHANG HONG MACHINE CO., LTD. is located at No. 20, Ln. 33, Sec. 3, Dafu Rd., Tanzi Dist., Taichung City 427341, Taiwan — all machines are made in our own factory. Factory visits are welcome by appointment.',
    },
    {
        q: 'Are your machines food-safety compliant?',
        a: 'Yes. All SHANG HONG MACHINE industrial mixers and cookers use food-grade stainless steel, are designed for easy cleaning and maintenance, and comply with food processing hygiene standards — safe for use in food processing plants, restaurants, and commercial kitchens.',
    },
]

function faqSchemaJson(items: FaqItem[]): string {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
    })
}

// 預先序列化兩種語言版本，避免每次 render 重建。
const FAQ_SCHEMA_JSON_ZH = faqSchemaJson(FAQ_ZH)
const FAQ_SCHEMA_JSON_EN = faqSchemaJson(FAQ_EN)

function FAQItem({ item, defaultOpen }: { item: FaqItem; defaultOpen: boolean }) {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <details
            className="group py-5"
            open={open}
            onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
        >
            <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="text-[18px] md:text-[19px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] m-0 [text-wrap:balance]">
                    {item.q}
                </h3>
                <span
                    aria-hidden
                    className="shrink-0 mt-1 h-6 w-6 flex items-center justify-center rounded-full border border-[#ececea] dark:border-white/[0.1] text-[#737370] dark:text-[#a8a39b] text-[14px] font-light transition-transform duration-200 group-open:rotate-45"
                >
                    +
                </span>
            </summary>
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#3a3a36] dark:text-[#d1ccc4] mt-3 max-w-[760px] [text-wrap:pretty]">
                {item.a}
            </p>
        </details>
    )
}

export default function FAQ() {
    const { language } = useLocale()
    const items = language === 'zh' ? FAQ_ZH : FAQ_EN
    const schemaJson = language === 'zh' ? FAQ_SCHEMA_JSON_ZH : FAQ_SCHEMA_JSON_EN

    return (
        <section
            id="faq"
            className="bg-[#fcfcfb] dark:bg-[#1a1916] py-24 lg:py-28 transition-colors duration-300"
            aria-labelledby="faq-heading"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: schemaJson }}
            />
            <div className="container mx-auto px-6 lg:px-14">
                <div className="flex items-center gap-2.5 text-[12px] font-normal text-[#993333] tracking-[0.18em] uppercase mb-4">
                    <span className="h-px w-[18px] bg-[#993333]" />
                    {language === 'zh' ? '常見問題 · FAQ' : 'FAQ · 常見問題'}
                </div>

                <h2
                    id="faq-heading"
                    className="text-[32px] md:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.025em] font-light text-[#0f0f0e] dark:text-[#f1ece4] m-0 mb-12 max-w-[820px] [text-wrap:balance]"
                >
                    <span className="sr-only">
                        {language === 'zh'
                            ? '上泓機械 SHANG HONG MACHINE 常見問題 — '
                            : 'SHANG HONG MACHINE 上泓機械 frequently asked questions — '}
                    </span>
                    {language === 'zh' ? (
                        <>
                            關於攪拌機、炒食機，<br />
                            <span className="font-bold">客戶最常問的問題。</span>
                        </>
                    ) : (
                        <>
                            About our food mixers and cookers —<br />
                            <span className="font-bold">questions we hear the most.</span>
                        </>
                    )}
                </h2>

                <div className="max-w-[860px] divide-y divide-[#ececea] dark:divide-white/[0.06]">
                    {items.map((it, i) => (
                        <FAQItem key={i} item={it} defaultOpen={i === 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}
