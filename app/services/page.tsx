"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Briefcase, Users, FileText, ArrowRight, Phone, MessageSquare, Calendar, Video } from "lucide-react";
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
                        className="mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold uppercase font-oswald tracking-tighter mb-6">
                            Prêt à passer à l'action ?
                        </h2>
                        <p className="text-gray-500 font-light max-w-xl mx-auto">
                            Choisissez le mode de contact qui vous convient le mieux. Notre équipe est réactive et à votre écoute.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Calendar, title: "Rendez-vous", desc: "Planifiez une rencontre en présentiel", href: "#booking?type=audit" },
                            { icon: Video, title: "Appel Vidéo", desc: "Session de conseil à distance", href: "#booking?type=visio" },
                            { icon: Phone, title: "Programmer un Appel", desc: "On vous rappelle au créneau souhaité", href: "#booking?type=appel" },
                            { icon: MessageSquare, title: "Envoyer un Message", desc: "Réponse par email sous 2 heures", href: "#booking?type=contact" },
                        ].map((action, i) => (
                            <Link 
                                key={i}
                                href={action.href}
                                className="glass p-10 flex flex-col items-center group hover:bg-white hover:text-black transition-all duration-700 border-white/5"
                            >
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-black/5 group-hover:border-black/10 transition-all duration-700">
                                    <action.icon size={24} className="text-blue-400 group-hover:text-black transition-colors" />
                                </div>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-3">{action.title}</h4>
                                <p className="text-[10px] text-gray-500 group-hover:text-gray-700 uppercase tracking-wider leading-relaxed">
                                    {action.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Section Integration */}
            <BookingSection />

            <Footer />
        </main>
    );
}
