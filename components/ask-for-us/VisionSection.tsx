"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Target, Users } from 'lucide-react';

const visionPoints = [
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description: "Nous imaginons des solutions qui ne se contentent pas de répondre aux besoins d'aujourd'hui, mais qui préparent vos équipes aux défis de demain."
  },
  {
    icon: Target,
    title: "Excellence Durable",
    description: "Notre ambition est de devenir un partenaire incontournable dans la gestion et le développement des talents."
  },
  {
    icon: Users,
    title: "Évolution Collective",
    description: "Notre vision est celle d'un monde professionnel où les entreprises et leurs collaborateurs évoluent ensemble, main dans la main."
  }
];

export default function VisionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Notre vision
          </h2>
          
          <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />

          <h3 className="text-2xl font-bold text-[#316082] mb-8">
            Imaginer le futur, agir dans le présent !
          </h3>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez ASK Advisory, notre vision est simple : accompagner les entreprises 
            et leurs collaborateurs dans leur transformation pour bâtir un avenir aligné 
            sur leurs valeurs et leurs ambitions. Nous croyons qu'un management centré 
            sur l'humain est la clé d'un environnement de travail épanouissant, 
            performant, et durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#fdca3f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#316082]" />
                </div>
                <h4 className="text-xl font-bold text-[#316082] mb-4">{point.title}</h4>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}