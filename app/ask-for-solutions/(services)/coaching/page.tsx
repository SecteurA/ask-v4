"use client";

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Coaching Background"
            fill
            className="object-cover scale-105"
            style={{ filter: 'brightness(0.35)' }}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Decorative Line */}
              <div className="w-24 h-1 bg-[#68b0d9] mb-8" />
              
              {/* Main Heading */}
              <h1 className="font-bold tracking-tight mb-6">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2">
                  COACHING
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                  Inspirez vos équipes, développez les talents
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-2xl">
                Transformez le potentiel de vos collaborateurs
                <span className="block mt-1">en performance durable</span>
              </p>

          
            </motion.div>
          </div>
        </div>

        {/* Simple Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Les défis professionnels sont nombreux : responsabilités croissantes, 
                  objectifs ambitieux, ou transitions complexes. Que ce soit pour un manager, 
                  un expert ou un collaborateur, le besoin de progresser et de trouver des 
                  solutions concrètes est essentiel.
                </p>
                <p className="text-xl font-medium text-[#316082] italic">
                  Comment accompagner vos équipes dans cette évolution ?
                </p>
                <p>
                  Chez ASK Advisory, nous croyons que chaque collaborateur, quel que soit son 
                  rôle, a un potentiel unique à révéler. Nos programmes de coaching, individuels 
                  et collectifs, sont conçus pour répondre aux besoins spécifiques de vos équipes, 
                  qu'il s'agisse de développer des compétences, d'améliorer la performance ou de 
                  surmonter des défis professionnels. Grâce à une approche personnalisée, nous 
                  aidons vos talents à grandir, à s'épanouir, et à contribuer pleinement à la 
                  réussite collective.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Coaching"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#316082] mb-6">
              Concrètement, faire appel à notre expertise en coaching, c'est :
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Accompagner vos collaborateurs dans leur développement personnel et professionnel",
              "Renforcer la confiance et l'efficacité dans des contextes variés",
              "Faciliter la gestion des transitions ou des défis complexes",
              "Créer un environnement de travail épanouissant et performant"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#316082] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-lg">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#316082] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêts à accompagner vos équipes vers leur plein potentiel ?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contactez-nous pour découvrir nos solutions de coaching sur mesure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#fdca3f] hover:bg-white text-[#316082] px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg"
            >
              <span className="mr-2">Contactez-nous</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}