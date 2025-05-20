"use client";

import { motion } from 'framer-motion';
import { Users2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ConseilRHPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Conseil RH Background"
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
                  CONSEIL RH
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                  Révélez la force cachée de vos ressources humaines
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-2xl">
                Transformez vos pratiques RH
                <span className="block mt-1">en leviers de performance</span>
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
                  Votre entreprise évolue dans un environnement en constante mutation. Les attentes 
                  des collaborateurs changent, les besoins organisationnels deviennent plus 
                  complexes, et les processus traditionnels ne suffisent plus à répondre aux 
                  défis actuels.
                </p>
                <p className="text-xl font-medium text-[#316082] italic">
                  Vous vous demandez comment aligner vos ressources humaines sur vos ambitions 
                  stratégiques tout en restant fidèle à vos valeurs ?
                </p>
                <p>
                  Chez ASK Advisory, nous transformons vos ressources humaines en un levier 
                  stratégique. Notre équipe vous accompagne pour optimiser vos politiques RH, 
                  moderniser vos processus, et anticiper les changements à venir. Grâce à une 
                  approche sur-mesure, nous intervenons à vos côtés pour relever vos défis 
                  spécifiques et bâtir des solutions concrètes adaptées à vos ambitions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Conseil RH"
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
              Concrètement, faire appel à notre expertise en Conseil RH, c'est :
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Aligner vos politiques RH sur vos objectifs stratégiques",
              "Renforcer la gestion des talents pour attirer et fidéliser les meilleurs profils",
              "Accompagner le changement avec des outils et méthodes éprouvées",
              "Optimiser vos processus pour gagner en efficacité et en agilité"
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêts à transformer vos ressources humaines en un moteur de performance durable ?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Contactez-nous dès aujourd'hui pour découvrir comment nos solutions peuvent 
              accompagner vos ambitions.
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