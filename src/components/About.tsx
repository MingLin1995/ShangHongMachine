"use client"

import { useLanguageStore } from '@/stores/languageStore'

export default function About() {
    const { translations } = useLanguageStore()

    return (
        <div id="about" className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                    {translations.about.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {translations.about.story.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            {translations.about.story.content}
                        </p>
                    </div>
                    <div className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {translations.about.vision.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            {translations.about.vision.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 