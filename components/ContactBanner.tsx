"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#316082] to-[#68b0d9] rounded-3xl overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 top-1/2 w-96 h-96 bg-white rounded-full opacity-10 transform -translate-y-1/2" />
            <div className="absolute -left-32 top-1/2 w-64 h-64 bg-[#fdca3f] rounded-full opacity-10 transform -translate-y-1/2" />
          </div>

          {/* Content Container */}
          <div className="relative px-8 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="text-white text-center md:text-left max-w-2xl">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discutons de vos projets
              </h2>
              <p className="text-lg text-white/90">
                Vous avez un défi RH ou un projet ambitieux ? ASK Advisory est là pour vous accompagner.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-[#fdca3f] hover:bg-white text-[#316082] px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl font-bold text-lg"
              >
                <span className="mr-2">Contactez-nous</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}