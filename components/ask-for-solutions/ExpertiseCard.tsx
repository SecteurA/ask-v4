"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ExpertiseCardProps {
  expertise: {
    icon: LucideIcon;
    title: string;
    tagline: string;
    description: string;
    question: string;
    solution: string;
    benefits: string[];
    cta: string;
  };
  index: number;
}

// Mapping of expertise-specific Unsplash images
const expertiseImages = [
  // Conseil RH - Business meeting/consulting
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  // Coaching - Mentoring/coaching session
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  // Headhunting - Professional networking
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  // Formation - Training session
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  // Team-building - Team collaboration
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
];

export default function ExpertiseCard({ expertise, index }: ExpertiseCardProps) {
  const Icon = expertise.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-1/2 w-64 h-64 bg-[#68b0d9] rounded-full opacity-5 transform -translate-y-1/2" />
        <div className="absolute -right-48 top-1/2 w-96 h-96 bg-[#316082] rounded-full opacity-5 transform -translate-y-1/2" />
      </div>

      {/* Content Container */}
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#316082] to-[#68b0d9] p-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Icon className="w-10 h-10 text-[#316082]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{expertise.title}</h2>
              <p className="text-xl text-white/90">{expertise.tagline}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">{expertise.description}</p>
              <p className="text-xl font-medium text-[#316082] italic">{expertise.question}</p>
              <p className="text-lg">{expertise.solution}</p>
            </div>

            {/* Image */}
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={expertiseImages[index]}
                alt={expertise.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#316082]">
              <h4 className="text-xl font-bold text-[#316082] mb-6">
                Concrètement, faire appel à notre expertise en {expertise.title.toLowerCase() === "conseil rh" ? "Conseil RH" : expertise.title.toLowerCase()}, c'est :
              </h4>
              <ul className="space-y-4">
                {expertise.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#316082] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl font-medium text-[#316082]">{expertise.cta}</p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full justify-center"
              >
                <span className="mr-2">Contactez-nous</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}