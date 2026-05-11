"use client";

import { motion } from "framer-motion";
import { INSURERS } from "@/lib/data";

const CATEGORY_STYLES: Record<string, { label: string; bg: string; text: string; dot: string }> = {
    IARDT:    { label: "IARDT",    bg: "bg-blue-500/10",   text: "text-blue-400",   dot: "bg-blue-500" },
    VIE:      { label: "Vie",      bg: "bg-violet-500/10", text: "text-violet-400", dot: "bg-violet-500" },
    PERSONNES:{ label: "Personnes",bg: "bg-emerald-500/10",text: "text-emerald-400",dot: "bg-emerald-500" },
};

export default function PartnersSection() {
    return (
        <section className="bg-black border-b border-white/5 py-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
                    <div>
                        <span className="label text-blue-500/60 mb-3">Écosystème LBASSUR</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-oswald uppercase text-white tracking-tight leading-none">
                            Nos Partenaires
                        </h2>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-5 flex-wrap">
                        {Object.values(CATEGORY_STYLES).map((s) => (
                            <div key={s.label} className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
                    {INSURERS.map((insurer, i) => (
                        <motion.div
                            key={insurer.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            viewport={{ once: true }}
                            className="bg-black p-8 group hover:bg-white/[0.03] transition-colors duration-500 flex flex-col"
                        >
                            {/* Logo */}
                            <div className="flex-1 flex items-center justify-center mb-6 min-h-[64px]">
                                <img
                                    src={insurer.logo}
                                    alt={insurer.name}
                                    className="h-10 w-auto max-w-[140px] object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            `https://ui-avatars.com/api/?name=${encodeURIComponent(insurer.name)}&background=1e293b&color=60a5fa&bold=true&length=2&size=64`;
                                    }}
                                />
                            </div>

                            {/* Name */}
                            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 group-hover:text-white transition-colors duration-500 text-center mb-4 leading-tight">
                                {insurer.name}
                            </p>

                            {/* Category badges */}
                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {insurer.categories.map((cat) => {
                                    const style = CATEGORY_STYLES[cat];
                                    if (!style) return null;
                                    return (
                                        <span
                                            key={cat}
                                            className={`inline-flex items-center gap-1.5 px-2 py-1 ${style.bg} ${style.text} text-[9px] font-bold uppercase tracking-[0.2em]`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                            {style.label}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
