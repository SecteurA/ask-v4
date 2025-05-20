"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-[550px] w-full overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Ask For Us Background"
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
                ASK FOR US
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                Là où tout commence...
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-2xl">
              Découvrez notre histoire, notre vision
              <span className="block mt-1">et les valeurs qui nous animent</span>
            </p>

            {/* CTA Button */}
           
          </motion.div>
        </div>
      </div>

      {/* Simple Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}