"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Users, Star } from 'lucide-react';

export default function IntroSection() {
  const highlights = [
    {
      icon: Target,
      title: "Excellence sur mesure",
      description: "Des solutions RH personnalisées qui s'adaptent à vos enjeux spécifiques"
    },
    {
      icon: Users,
      title: "Expertise reconnue",
      description: "Une équipe passionnée avec une expérience approfondie en ressources humaines"
    },
    {
      icon: Star,
      title: "Impact durable",
      description: "Des résultats concrets qui transforment durablement vos équipes"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Introduction */}
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-8">
              Bienvenue chez ASK Advisory
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl">
                Nous sommes plus qu'une simple agence de conseil en ressources humaines. 
                Nous sommes vos partenaires dans la construction d'un avenir professionnel 
                plus performant et plus humain.
              </p>
              <p>
                Notre mission est de vous accompagner dans la libération du plein potentiel 
                de vos équipes. En combinant expertise stratégique et approche personnalisée, 
                nous transformons chaque défi en opportunité de croissance et de succès.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[#316082] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#316082] mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Solutions Preview */}
          <div className="text-center">
            <p className="text-xl text-[#316082] font-medium mb-8">
              Découvrez nos solutions complètes en Conseil RH, Coaching, Headhunting, 
              Formation et Team-building, conçues pour répondre à tous vos besoins.
            </p>
            
            <Link
              href="/ask-for-solutions"
              className="group inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mr-2">Découvrir nos solutions</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}