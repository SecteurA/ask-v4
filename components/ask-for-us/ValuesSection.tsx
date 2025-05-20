"use client";

import { motion } from 'framer-motion';
import { Eye, Star, Heart } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: "Transparence",
    subtitle: "Au commencement",
    description: "Tout commence par une relation de confiance. Nous nous engageons à être clairs et honnêtes à chaque étape, pour que vous avanciez en toute sérénité."
  },
  {
    icon: Star,
    title: "Excellence",
    subtitle: "Tout au long du chemin",
    description: "Chaque action que nous menons vise à dépasser vos attentes. La recherche d'excellence est ce qui nous anime à chaque étape de notre collaboration."
  },
  {
    icon: Heart,
    title: "Humanité",
    subtitle: "La finalité",
    description: "Parce qu'au bout du compte, ce sont les personnes qui font la différence. Nos actions visent à révéler le potentiel humain et à construire un avenir collectif où chacun trouve sa place."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Nos valeurs
          </h2>
          
          <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />

          <h3 className="text-2xl font-bold text-[#316082] mb-8">
            Les valeurs qui rythment notre engagement
          </h3>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez ASK Advisory, nos valeurs sont plus qu'un engagement : elles structurent 
            chaque étape de notre collaboration avec vous. Depuis le premier échange 
            jusqu'à la réalisation de vos ambitions, ces principes nous guident pour 
            transformer vos défis en réussites durables.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#fdca3f] transform -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-[#fdca3f] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <Icon className="w-10 h-10 text-[#316082]" />
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <h4 className="text-2xl font-bold text-[#316082] mb-2">{value.title}</h4>
                    <p className="text-[#fdca3f] font-medium mb-4">{value.subtitle}</p>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}