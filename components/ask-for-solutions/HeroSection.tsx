"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#316082] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdca3f] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="w-24 h-1 bg-[#fdca3f] mb-8" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#316082] mb-8">
              Une expertise complète pour répondre à tous vos enjeux RH
            </h1>

            <div className="space-y-6 text-xl text-gray-600 leading-relaxed mb-12">
              <p>
                Chez ASK Advisory, nous mettons à votre disposition une large gamme d'expertises
                pour répondre à vos défis RH. Qu'il s'agisse d'accompagner vos collaborateurs,
                d'optimiser vos processus, ou de développer vos talents, nos solutions
                sur-mesure sont conçues pour transformer vos ambitions en résultats concrets.
              </p>
              <p className="text-[#316082] font-semibold">
                Vous avez un projet RH spécifique ? Découvrez comment nos experts peuvent vous 
                accompagner à chaque étape de votre transformation.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg font-medium"
            >
              <span className="mr-2">Contactez-nous</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="ASK Advisory Expertise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
