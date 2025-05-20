"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background with enhanced overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
        style={{ filter: 'brightness(0.35)' }}
      >
        <source src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/team.mp4" type="video/mp4" />
      </video>

      {/* Content Container */}
      <div className="relative h-full flex items-center z-10">
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
                Faites de vos défis,
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#68b0d9] to-white bg-clip-text text-transparent">
                des succès durables !
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-2xl">
              Des solutions RH sur mesure pour révéler le potentiel 
              <span className="block mt-1">de vos équipes</span>
            </p>

            {/* CTA Button */}
            <Link
              href="/ask-for-solutions"
              className="group relative inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white text-lg font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl z-20"
            >
              <span className="mr-2">En savoir plus</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Simple Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}