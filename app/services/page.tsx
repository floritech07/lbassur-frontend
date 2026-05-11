"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Briefcase, Users, FileText, ArrowRight, Calendar, Zap } from "lucide-react";
import Link from "next/link";
import BookingSection from "@/components/BookingSection";

const services = [
    {
        id: "audit",
        title: "L'Audit",
        subtitle: "Analyse & Expertise",
        description: "Étude approfondie de vos risques et de vos contrats en cours pour identifier clairement les éventuels vides ou insuffisances de couverture. Nous garantissons une analyse précise pour une protection optimale.",
        icon: FileText,
        bgClass: "bg-blue-500/10",
        borderClass: "border-blue-500/20",
        textClass: "text-blue-400",
        barClass: "bg-blue-500/50"
    },
    {
        id: "assurance",
        title: "L'Assurance",
        subtitle: "Solutions Sur Mesure",
        description: "Nous offrons un panorama représentatif des meilleurs contrats du marché, sélectionnés par nos soins pour tous types de risques. Simplifiez votre processus d'assurance avec nos solutions adaptées.",
        icon: Shield,
        bgClass: "bg-emerald-500/10",
        borderClass: "border-emerald-500/20",
        textClass: "text-emerald-400",
        barClass: "bg-emerald-500/50"
    },
    {
        id: "conseil",
        title: "Conseil & Accompagnement",
        subtitle: "Support Continu",
        description: "LBASSUR et son équipe vous apportent conseil, écoute et accompagnement durant toute la durée de votre contrat. Une réelle prise en compte de chaque assuré pour suivre l'évolution des risques.",
        icon: Users,
        bgClass: "bg-violet-500/10",
        borderClass: "border-violet-500/20",
        textClass: "text-violet-400",
        barClass: "bg-violet-500/50"
    },
    {
        id: "indemnisation",
        title: "Indemnisation Rapide",
        subtitle: "Engagement Qualité",
        description: "En cas de sinistre, comptez sur nous pour une indemnisation rapide et équitable. Nous prenons en charge toutes les démarches administratives pour garantir votre tranquillité d'esprit.",
        icon: Briefcase,
        bgClass: "bg-slate-500/10",
        borderClass: "border-slate-500/20",
        textClass: "text-slate-400",
        barClass: "bg-slate-500/50"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-black min-h-screen text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] -z-0"></div>
                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="glass inline-block py-2 px-6 rounded-full text-[10px] uppercase tracking-[0.4em] text-blue-400 font-bold mb-8">
                            Notre Expertise
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter font-oswald text-white mb-8">
                            Nos Services
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                            Des solutions d'assurance innovantes et un accompagnement sur mesure pour sécuriser ce qui compte le plus pour vous.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Enumeration */}
            <section className="py-20 px-6 relative">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-black p-12 group hover:bg-white/[0.02] transition-colors duration-700"
                            >
                                <div className={`w-14 h-14 ${service.bgClass} border ${service.borderClass} flex items-center justify-center mb-10 transition-transform duration-700 group-hover:scale-110`}>
                                    <service.icon className={service.textClass} size={24} />
                                </div>
                                <span className={`text-[10px] uppercase tracking-[0.3em] ${service.textClass} font-bold mb-4 block`}>
                                    {service.subtitle}
                                </span>
                                <h3 className="text-3xl font-bold uppercase font-oswald text-white mb-6 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-10">
                                    {service.description}
                                </p>
                                <div className={`h-px w-0 ${service.barClass} group-hover:w-12 transition-all duration-700`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Action Selection Section */}
            <section className="py-32 px-6 bg-zinc-950/50 border-y border-white/5 relative">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                
                <div className="container mx-auto max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald tracking-tighter mb-8">
                            Besoin d'un <span className="text-blue-500">Expert</span> ?
                        </h2>
                        <p className="text-gray-500 font-light text-lg mb-12 leading-relaxed">
                            LBASSUR vous accompagne dans toutes vos démarches. Que ce soit pour un audit gratuit, une demande de devis ou un conseil personnalisé, notre équipe est prête à vous recevoir.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link 
                                href="#booking"
                                className="w-full sm:w-auto px-12 py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-3"
                            >
                                <Calendar size={16} />
                                Prendre Rendez-vous
                            </Link>
                            <Link 
                                href="/simulation"
                                className="w-full sm:w-auto px-12 py-6 glass text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-center gap-3"
                            >
                                <Zap size={16} />
                                Faire une Simulation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Booking Section Integration */}
            <BookingSection />

            <Footer />
        </main>
    );
}
