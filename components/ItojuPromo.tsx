"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Zap, Users, ArrowRight, ExternalLink } from "lucide-react";

export default function ItojuPromo() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block glass px-4 py-1 rounded-full mb-8 border-emerald-500/20">
                <span className="text-emerald-400 font-bold uppercase tracking-[0.4em] text-[9px]">Innovation Santé</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold font-oswald uppercase mb-8 text-white tracking-tighter">
                Découvrez <span className="text-gradient-emerald">Itoju</span>
              </h2>
              
              <p className="text-gray-400 text-xl font-light mb-10 leading-relaxed">
                Votre santé, notre priorité. <span className="text-white font-medium">Itoju</span> simplifie l'accès aux soins de qualité au Bénin. Souscrivez en 2 minutes, gérez tout depuis votre mobile et profitez de la force du réseau <span className="text-white font-medium">LBAssur</span>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="glass p-6 border-white/5 hover:border-emerald-500/20 transition-all duration-500">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-emerald-400" size={20} />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Validation Instantanée</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-wider">Vérification immédiate des droits pour un accès direct aux soins.</p>
                </div>
                <div className="glass p-6 border-white/5 hover:border-blue-500/20 transition-all duration-500">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-blue-400" size={20} />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Paiements Garantis</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-wider">Sécurité et rapidité des transactions pour tous les prestataires.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://lb-assurmaladie-staticwebsite.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-10 py-6 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-500 transition-all duration-700 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                >
                  Accéder à Itoju <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Professional Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-12 border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <h3 className="text-3xl font-bold font-oswald uppercase text-white mb-8 tracking-tighter">
                Espace Professionnels & Entreprises
              </h3>
              
              <p className="text-gray-500 mb-10 font-light leading-relaxed">
                Itoju n'est pas qu'une application pour les assurés. C'est un écosystème complet qui connecte les meilleurs prestataires de soins du Bénin. Propulsé par LB Assur, nous offrons une plateforme robuste pour gérer vos interactions.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  "Interface de gestion dédiée gratuite",
                  "Visibilité auprès de 10k+ assurés",
                  "Reporting en temps réel des prestations",
                  "Optimisation de la relation client"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/item:bg-emerald-500/20 transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover/item:text-white transition-colors duration-500">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-8 border border-white/5 bg-white/[0.02] text-center">
                <Users className="mx-auto mb-4 text-emerald-400" size={32} />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Rejoignez le Réseau Itoju</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient-emerald {
          background: linear-gradient(to right, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
