"use client"

import { useLanguageStore } from '@/stores/languageStore'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
    name: string
    email: string
    message: string
}

function splitColon(s: string): { k: string; v: string } {
    const m = s.match(/^([^：]+)：(.+)$/)
    return m ? { k: m[1], v: m[2] } : { k: '', v: s }
}

export default function Contact() {
    const { language, translations } = useLanguageStore()
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError(language === 'zh' ? '請填寫所有欄位' : 'Please fill in all fields')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setError(language === 'zh' ? '請輸入有效的電子郵件地址' : 'Please enter a valid email address')
            return
        }

        setIsSubmitting(true)

        try {
            await emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    reply_to: formData.email,
                }
            )

            setSent(true)
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setSent(false), 4500)
        } catch (err) {
            console.error('EmailJS Error:', err)
            setError(language === 'zh' ? '發送失敗，請稍後再試或直接聯繫我們。' : 'Failed to send, please try again later or contact us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const items = [
        splitColon(translations.contact.tel),
        splitColon(translations.contact.fax),
        splitColon(translations.contact.email),
        splitColon(translations.contact.address),
    ]

    return (
        <section id="contact" className="bg-[#f7f6f3] dark:bg-[#161412] py-24 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-14">
                {/* Label */}
                <div className="flex items-center gap-2.5 text-[12px] font-normal text-[#993333] tracking-[0.18em] uppercase mb-4">
                    <span className="h-px w-[18px] bg-[#993333]" />
                    {language === 'zh' ? '聯絡我們 · CONTACT' : 'CONTACT · 聯絡'}
                </div>

                {/* Headline */}
                <h2 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.025em] font-light text-[#0f0f0e] dark:text-[#f1ece4] m-0 mb-16 max-w-[720px] [text-wrap:balance]">
                    {language === 'zh' ? (
                        <>
                            歡迎來訊，<br />
                            <span className="font-bold">讓我們為您報價。</span>
                        </>
                    ) : (
                        <>
                            Get in touch,<br />
                            <span className="font-bold">let&apos;s talk specs.</span>
                        </>
                    )}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] gap-12 items-start">
                    {/* Info */}
                    <div>
                        <div className="text-[22px] font-semibold tracking-tight text-[#0f0f0e] dark:text-[#f1ece4] mb-6">
                            {translations.contact.company}
                        </div>
                        {items.map((it, i) => (
                            <div
                                key={i}
                                className={`flex gap-3 py-4 border-t border-[#ececea] dark:border-white/[0.06] ${i === items.length - 1 ? 'border-b' : ''}`}
                            >
                                <div className="text-[11px] font-medium text-[#993333] tracking-[0.16em] uppercase w-16 shrink-0 pt-0.5">
                                    {it.k}
                                </div>
                                <div className="text-[14px] leading-[1.55] text-[#3a3a36] dark:text-[#d1ccc4] flex-1">{it.v}</div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="bg-white dark:bg-[#1a1916] rounded-3xl p-8 border border-[#ececea] dark:border-white/[0.06]">
                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            {error && (
                                <div role="alert" className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-[13px] font-medium">
                                    {error}
                                </div>
                            )}
                            <div>
                                <label className="block text-[13px] font-medium text-[#3a3a36] dark:text-[#d1ccc4] mb-2">
                                    {translations.contact.form.name}
                                </label>
                                <input
                                    type="text"
                                    placeholder={translations.contact.form.name}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 text-[15px] bg-[#fcfcfb] dark:bg-[#242220] text-[#0f0f0e] dark:text-[#f1ece4] border border-[#ececea] dark:border-white/[0.06] rounded-xl outline-none focus:border-[#993333] focus:ring-[3px] focus:ring-[#993333]/15 transition-shadow"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-[#3a3a36] dark:text-[#d1ccc4] mb-2">
                                    {translations.contact.form.email}
                                </label>
                                <input
                                    type="email"
                                    placeholder={translations.contact.form.email}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 text-[15px] bg-[#fcfcfb] dark:bg-[#242220] text-[#0f0f0e] dark:text-[#f1ece4] border border-[#ececea] dark:border-white/[0.06] rounded-xl outline-none focus:border-[#993333] focus:ring-[3px] focus:ring-[#993333]/15 transition-shadow"
                                />
                            </div>
                            <div>
                                <label className="block text-[13px] font-medium text-[#3a3a36] dark:text-[#d1ccc4] mb-2">
                                    {translations.contact.form.message}
                                </label>
                                <textarea
                                    placeholder={language === 'zh' ? '想了解 SH-301 攪拌機規格 / 報價⋯' : 'Interested in SH-301 specs / pricing⋯'}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 text-[15px] bg-[#fcfcfb] dark:bg-[#242220] text-[#0f0f0e] dark:text-[#f1ece4] border border-[#ececea] dark:border-white/[0.06] rounded-xl outline-none focus:border-[#993333] focus:ring-[3px] focus:ring-[#993333]/15 transition-shadow min-h-[120px] resize-y"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#993333] hover:bg-[#7a2929] text-white text-[15px] font-medium transition-colors disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        {translations.contact.form.submitting}
                                    </>
                                ) : (
                                    <>
                                        {translations.contact.form.submit}
                                        <span aria-hidden className="text-[13px]">→</span>
                                    </>
                                )}
                            </button>
                            {sent && (
                                <div className="px-4 py-3 rounded-xl bg-[#993333]/[0.06] dark:bg-[#ff9999]/10 text-[#993333] dark:text-[#ff9999] text-[13px] font-medium text-center">
                                    {language === 'zh' ? '✓ 訊息已送出，我們會盡快回覆您。' : '✓ Message sent — we&apos;ll get back to you soon.'}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
} 