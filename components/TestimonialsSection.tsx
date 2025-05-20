"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Grâce à l'accompagnement d'ASK Advisory, nous avons restructuré nos équipes et renforcé la collaboration interne. Aujourd'hui, nos objectifs sont alignés, et la performance collective a pris un véritable essor.",
    author: "Client X",
    company: "Entreprise du secteur technologique",
    logoUrl: "https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/logo-placeholder-1.png"
  },
  {
    text: "ASK Advisory a compris nos enjeux et a su nous proposer des solutions sur mesure. Leur expertise en coaching et team-building a fait toute la différence pour motiver nos collaborateurs et renforcer leur engagement.",
    author: "Client Y",
    company: "PME du secteur industriel",
    logoUrl: "https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/logo-placeholder-2.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Ce qu'ils disent de nous
          </h2>
          <p className="text-xl text-gray-600">
            Ce sont nos clients qui parlent le mieux de nous…
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-8 relative border-2 border-[#316082] transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-5 left-8">
                <div className="bg-[#fdca3f] p-3 rounded-full border-2 border-[#316082]">
                  <Quote className="w-6 h-6 text-[#316082]" />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {testimonial.text}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#316082]">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="w-24 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-2">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                      LOGO
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}