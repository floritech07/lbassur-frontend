"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const GLOSSARY_PREVIEW = [
    { term: "IARD", definition: "Incendie, Accidents et Risques Divers. Désigne l'assurance des dommages aux biens matériels." },
    { term: "Franchise", definition: "Part du sinistre qui reste à la charge de l'assuré après indemnisation par la compagnie." },
    { term: "Délai de Carence", definition: "Période initiale pendant laquelle les garanties souscrites ne sont pas encore applicables." },
    { term: "Prime",  definition: "Cotisation versée par l'assuré en échange de la couverture des risques définis au contrat." },
];

export default function GlossarySection() {
    return (
        <section id="glossaire" className="py-32 bg-black text-white border-b border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                    {/* Left */}
                    <div>
                        <span className="label text-blue-500/60 mb-6 block">Éducation & Transparence</span>
                        <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald mb-8 text-white leading-none tracking-tight">
                            Comprendre pour<br />
                            <span className="text-gradient-blue">Mieux Choisir</span>
                        </h2>
                        <p className="text-gray-400 text-base mb-10 leading-relaxed font-light max-w-md">
                            L'assurance ne devrait pas être un langage complexe. Nous avons simplifié les termes
                            essentiels du marché béninois pour une transparence totale.
                        </p>
                        <Link
                            href="/education"
                            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white border-b border-white/20 pb-2 hover:border-blue-500 hover:text-blue-400 transition-all duration-500 group"
                        >
                            Voir le glossaire complet
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Right — term cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
                        {GLOSSARY_PREVIEW.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-black p-8 group hover:bg-white/[0.03] transition-colors duration-500"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-6 h-6 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 transition-colors duration-500">
                                        <BookOpen size={11} className="text-gray-600 group-hover:text-blue-400 transition-colors duration-500" />
                                    </div>
                                    <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-white">{item.term}</h4>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                    {item.definition}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
