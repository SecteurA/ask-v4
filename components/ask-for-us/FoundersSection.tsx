"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const founders = [
  {
    name: "Karima DOUNIA",
    role: "Directrice Associée RH",
    quote: "Une entreprise performante repose sur des collaborateurs épanouis et engagés.",
    description: "Karima est une experte reconnue en stratégie RH, avec plus de 15 ans d'expérience dans l'accompagnement des entreprises. À travers ses multiples projets, elle a su démontrer sa capacité à transformer les ressources humaines en un véritable levier de performance, tout en restant fidèle à ses valeurs de transparence et d'excellence.",
    skills: [
      "Développement de stratégies RH alignées sur les objectifs d'entreprise",
      "Gestion des crises et transformations organisationnelles",
      "Accompagnement des équipes dans le changement"
    ],
    linkedin: "#",
    image: "https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/Karima-Dounia.webp"
  },
  {
    name: "Meriem ELLABA",
    role: "Directrice Associée Projets",
    quote: "Chaque projet est une opportunité d'innover et de faire grandir les équipes.",
    description: "Meriem est spécialisée dans la gestion de projets stratégiques et la transformation organisationnelle. Son expertise couvre aussi bien la conduite de projets complexes que la formation et l'accompagnement des équipes. Elle apporte une approche proactive et visionnaire, où chaque projet est pensé pour maximiser l'impact humain et organisationnel.",
    skills: [
      "Pilotage de projets RH et organisationnels",
      "Formation et montée en compétences des équipes",
      "Gestion de projets interculturels et développement international"
    ],
    linkedin: "#",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  }
];

export default function FoundersSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#316082] mb-6">
            Nos fondatrices
          </h2>
          
          <div className="w-24 h-1 bg-[#fdca3f] mx-auto mb-8" />

          <h3 className="text-2xl font-bold text-[#316082] mb-8">
            Deux femmes visionnaires, une même source d'engagement !
          </h3>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Derrière ASK Advisory, il y a deux femmes aux parcours riches et complémentaires. 
            Karima Dounia et Meriem Ellaba, animées par une passion commune pour l'humain, 
            mettent leur expertise au service des entreprises. Elles incarnent une vision 
            moderne des ressources humaines, où excellence et humanité se conjuguent pour 
            répondre aux défis d'aujourd'hui et de demain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{founder.name}</h4>
                  <p className="text-white/90">{founder.role}</p>
                </div>
              </div>

              <div className="p-8">
                <blockquote className="text-lg italic text-gray-600 mb-6 border-l-4 border-[#fdca3f] pl-4">
                  "{founder.quote}"
                </blockquote>

                <p className="text-gray-600 mb-6">{founder.description}</p>

                <div className="mb-8">
                  <h5 className="font-bold text-[#316082] mb-4">Compétences clés :</h5>
                  <ul className="space-y-2">
                    {founder.skills.map((skill, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#fdca3f] rounded-full mr-3" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={founder.linkedin}
                  className="inline-flex items-center bg-[#316082] hover:bg-[#68b0d9] text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Voir le profil LinkedIn
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-[#316082] mb-8">
            Vous souhaitez en savoir plus sur leur parcours et découvrir comment elles peuvent 
            transformer vos ambitions RH en résultats concrets ?
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#fdca3f] hover:bg-[#316082] text-[#316082] hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-bold"
          >
            Contactez-nous dès aujourd'hui
          </Link>
        </motion.div>
      </div>
    </section>
  );
}