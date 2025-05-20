"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AgencySection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            L'agence
          </h2>
          
          <div className="w-24 h-1 bg-[#fdca3f] mb-8" />

          <h3 className="text-2xl font-bold text-[#316082] mb-8">
            Transformer vos défis en opportunités
          </h3>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Chez ASK Advisory, nous savons qu'une gestion des talents efficace est au cœur 
              de la réussite des entreprises. Chaque organisation est unique, et c'est 
              pourquoi nous proposons des solutions RH sur mesure, adaptées à vos défis spécifiques.
            </p>
            
            <p>
              Notre mission : révéler le potentiel des collaborateurs qui façonnent vos équipes. 
              Que ce soit à travers le Conseil RH, le Coaching, le Headhunting, la Formation ou 
              le Team-building, nous intervenons à vos côtés pour transformer vos ambitions en 
              succès durables.
            </p>
            
            <p>
              Avec une approche basée sur la transparence, l'excellence, et une passion pour 
              l'humain, nous aidons aussi bien les startups que les entreprises établies à 
              créer des environnements de travail performants et alignés sur leurs valeurs.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/ask-for-solutions"
              className="inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mr-2">Découvrir nos solutions RH sur mesure</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}