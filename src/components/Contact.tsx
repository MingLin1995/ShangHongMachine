"use client"

import { useLanguageStore } from '@/stores/languageStore'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
    name: string
    email: string
    message: string
}

export default function Contact() {
    const { language, translations } = useLanguageStore()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            alert(language === 'zh' ? '請填寫所有欄位' : 'Please fill in all fields')
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

            alert(language === 'zh' ? '訊息已送出！我們會盡快回覆您。' : 'Message sent! We will reply to you soon.')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            alert(language === 'zh' ? '發送失敗，請稍後再試或直接聯繫我們。' : 'Failed to send, please try again later or contact us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div id="contact" className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    {translations.contact.title}
                </h2>
                <div className="max-w-4xl mx-auto">
                    {/* 公司資訊區塊 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                {translations.contact.company}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-700 dark:text-gray-300">{translations.contact.tel}</p>
                                    <p className="text-gray-700 dark:text-gray-300">{translations.contact.fax}</p>
                                    <p className="text-gray-700 dark:text-gray-300">{translations.contact.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {translations.contact.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 聯絡表單 */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300 text-lg font-medium">
                                        {translations.contact.form.name}
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                    placeholder={translations.contact.form.name}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300 text-lg font-medium">
                                        {translations.contact.form.email}
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                    placeholder={translations.contact.form.email}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300 text-lg font-medium">
                                        {translations.contact.form.message}
                                    </span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered h-32 w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                    placeholder={translations.contact.form.message}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full text-lg font-semibold" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3.148 7.935l3.563-3.563z"></path>
                                        </svg>
                                        {translations.contact.form.submitting}
                                    </div>
                                ) : (
                                    translations.contact.form.submit
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 