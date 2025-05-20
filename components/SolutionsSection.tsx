"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users2, Brain, Target, Award, Puzzle } from 'lucide-react';

const solutions = [
  {
    title: "CONSEIL RH",
    description: "Transformez vos pratiques RH en leviers de performance.",
    details: "Optimisez vos processus, alignez vos stratégies, et développez votre capital humain.",
    cta: "OPTIMISEZ VOS RESSOURCES",
    href: "/ask-for-solutions/conseil-rh",
    icon: Users2,
    color: "#316082",
    hoverColor: "#68b0d9"
  },
  {
    title: "CHASSE DE TÊTE",
    description: "Identifiez et recrutez les talents qui feront la différence.",
    details: "Attirez les meilleurs profils, sécurisez vos recrutements stratégiques.",
    cta: "RECRUTEZ LES MEILLEURS",
    href: "/ask-for-solutions/chasse-de-tete",
    icon: Target,
    color: "#fdca3f",
    hoverColor: "#316082"
  },
  {
    title: "COACHING",
    description: "Renforcez le potentiel de vos collaborateurs et accompagnez-les vers l'excellence.",
    details: "Développez les compétences clés, inspirez le leadership, et catalysez la performance.",
    cta: "DÉVELOPPEZ VOS TALENTS",
    href: "/ask-for-solutions/coaching",
    icon: Brain,
    color: "#68b0d9",
    hoverColor: "#316082"
  },
  
  {
    title: "FORMATION",
    description: "Développez les compétences clés pour relever les défis de demain.",
    details: "Créez des parcours d'apprentissage sur mesure, stimulez l'innovation.",
    cta: "ÉLEVEZ VOS COMPÉTENCES",
    href: "/ask-for-solutions/formation",
    icon: Award,
    color: "#316082",
    hoverColor: "#68b0d9"
  },
  {
    title: "TEAM-BUILDING",
    description: "Créez des équipes soudées, motivées, et prêtes à relever tous les défis.",
    details: "Renforcez la cohésion, stimulez l'engagement collectif.",
    cta: "RENFORCEZ VOS ÉQUIPES",
    href: "/ask-for-solutions/team-building",
    icon: Puzzle,
    color: "#68b0d9",
    hoverColor: "#316082"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
              ASKFor Solutions
            </h2>
            <p className="text-xl text-gray-600">
              5 domaines d'expertise pour répondre à tous vos enjeux RH
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2"
                style={{ borderColor: solution.color }}
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: solution.color }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: solution.color }}
                  >
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow">
                    {solution.description}
                  </p>

                  {/* Details */}
                  <p className="text-sm text-gray-500 mb-6 italic">
                    {solution.details}
                  </p>
                  
                  {/* CTA Button */}
                  <Link
                    href={solution.href}
                    className="w-full text-center py-3 px-6 rounded-lg text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      backgroundColor: solution.color,
                      boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {solution.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}