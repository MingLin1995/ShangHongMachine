"use client"

import { useLanguageStore } from '@/stores/languageStore'
import Image from 'next/image'

export default function Services() {
    const { translations } = useLanguageStore()

    return (
        <div id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                    {translations.products.title}
                </h2>
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#993333] dark:text-[#ff9999]">
                        {translations.products.intro}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                        {translations.products.description}
                    </p>
                </div>

                {/* 炒食機系列 */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                        {translations.products.categories.cookers.title}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#993333] dark:text-[#ff9999]">
                        {translations.products.categories.cookers.subtitle}
                    </h4>
                    <div className="mb-12 max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                            {translations.products.categories.cookers.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {translations.products.categories.cookers.types.map((type, index) => (
                            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                                        {type.name}
                                    </h4>
                                    <div className="relative h-64 mb-6">
                                        <div className="absolute inset-0 p-4">
                                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-300 dark:border-gray-600 rounded-tl-lg"></div>
                                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 rounded-tr-lg"></div>
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-300 dark:border-gray-600 rounded-bl-lg"></div>
                                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-300 dark:border-gray-600 rounded-br-lg"></div>
                                        </div>
                                        <div className="relative h-full w-full p-6">
                                            <Image
                                                src={type.image}
                                                alt={type.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                        <div className="mb-4">
                                            <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                                {translations.products.categories.cookers.specs.model}
                                            </div>
                                            <div className="text-gray-800 dark:text-gray-200 text-xl">
                                                {type.model}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                                {translations.products.categories.cookers.specs.capacity}
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {type.specs.capacity.map((cap, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200 shadow-sm"
                                                    >
                                                        {cap}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 攪拌機系列 */}
                <div>
                    <h3 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                        {translations.products.categories.mixers.title}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-semibold text-center mb-6 text-[#993333] dark:text-[#ff9999]">
                        {translations.products.categories.mixers.subtitle}
                    </h4>
                    <div className="mb-12 max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                            {translations.products.categories.mixers.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {translations.products.categories.mixers.models.map((model, index) => (
                            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                                        {model.name} {model.model}
                                    </h4>
                                    <div className="relative h-64 mb-6">
                                        <div className="absolute inset-0 p-4">
                                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-300 dark:border-gray-600 rounded-tl-lg"></div>
                                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 rounded-tr-lg"></div>
                                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-300 dark:border-gray-600 rounded-bl-lg"></div>
                                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-300 dark:border-gray-600 rounded-br-lg"></div>
                                        </div>
                                        <div className="relative h-full w-full p-6">
                                            <Image
                                                src={model.image}
                                                alt={model.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                                        <div className="grid grid-cols-1 gap-4">
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.model}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.model}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.power}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.power}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.capacity}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.capacity}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.doughCapacity}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.doughCapacity}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.bowlDiameter}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.bowlDiameter}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.bowlDepth}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.bowlDepth}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.dimensions}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.dimensions}
                                                </span>
                                            </div>
                                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                                                    {translations.products.categories.mixers.specs.weight}
                                                </span>
                                                <span className="text-gray-800 dark:text-gray-200 font-medium">
                                                    {model.specs.weight}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 