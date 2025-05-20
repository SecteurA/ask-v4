"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};

// Replace these with actual client logos
const clients = Array(8).fill(null).map((_, i) => ({
  name: `Client ${i + 1}`,
  logo: `https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/logo-placeholder-${i + 1}.png`
}));

export default function ReferencesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            De nombreuses entreprises, grandes et petites, ont choisi ASK Advisory pour les accompagner dans leurs projets RH.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="aspect-[3/2] bg-white rounded-xl p-6 flex items-center justify-center border border-gray-200 hover:border-[#316082] transition-colors duration-300"
              >
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400 font-medium">
                  LOGO
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-xl text-[#316082] font-medium mb-8">
            Et si vous aussi vous en faisiez partie ?
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-medium text-lg"
          >
            Contactez-nous !
          </Link>
        </div>
      </div>
    </section>
  );
}