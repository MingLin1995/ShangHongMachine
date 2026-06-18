export default function Stats({ lang }: { lang: 'zh' | 'en' }) {
    const language = lang

    const items = [
        { n: '20', suffix: '+', label: language === 'zh' ? '年技術經驗' : 'years of expertise' },
        { n: '8', suffix: '', label: language === 'zh' ? '主力機型' : 'core machine models' },
        { n: '300', suffix: 'L', label: language === 'zh' ? '最大容量' : 'maximum capacity' },
        { n: '2', suffix: '', label: language === 'zh' ? '系列：炒食機・攪拌機' : 'series: cookers · mixers' },
    ]

    return (
        <div className="bg-[#fcfcfb] dark:bg-[#1a1916] border-t border-b border-[#ececea] dark:border-white/5 py-11 transition-colors duration-300">
            <div className="container mx-auto px-6 lg:px-14 grid grid-cols-2 md:grid-cols-4 gap-8">
                {items.map((it, i) => (
                    <div
                        key={i}
                        className={`pr-6 ${i < items.length - 1 ? 'md:border-r border-[#ececea] dark:border-white/5' : ''}`}
                    >
                        <div className="text-[48px] md:text-[56px] leading-none tracking-[-0.03em] font-light text-[#0f0f0e] dark:text-[#f1ece4]">
                            {it.n}
                            {it.suffix === 'L' ? (
                                <span className="text-[28px] font-normal text-[#737370] dark:text-[#a8a39b] tracking-normal">{it.suffix}</span>
                            ) : (
                                <span className="text-[#993333]">{it.suffix}</span>
                            )}
                        </div>
                        <div className="text-[13px] text-[#737370] dark:text-[#a8a39b] mt-2">{it.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
