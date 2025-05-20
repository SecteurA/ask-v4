"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const solutions = [
  { name: "CONSEIL RH", href: "/ask-for-solutions/conseil-rh" },
  { name: "COACHING", href: "/ask-for-solutions/coaching" },
  { name: "CHASSE DE TÊTE", href: "/ask-for-solutions/chasse-de-tete" },
  { name: "FORMATION", href: "/ask-for-solutions/formation" },
  { name: "TEAM-BUILDING", href: "/ask-for-solutions/team-building" },
];

const company = [
  { name: "ASK FOR US", href: "/ask-for-us" },
  { name: "ASK FOR SOLUTIONS", href: "/ask-for-solutions" },
  { name: "ASK FOR SUCCESS", href: "/ask-for-success" },
];

const contact = {
  email: "contact@askadvisory.ma",
  phone: "+212 661 18 15 16",
  address: "46 RUE EL BATINIA IMMEUBLE LA ROSE III MAARIF, CASABLANCA, Maroc",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#316082] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Image
              src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/logo_askadvisory.png"
              alt="Ask Advisory Logo"
              width={200}
              height={48}
              className="brightness-0 invert"
            />
            <p className="text-white/90">
              ASK Advisory transforme vos défis RH en opportunités de croissance. 
              Expertise, innovation et engagement pour des solutions sur mesure.
            </p>
            <div className="flex space-x-4">
              <Link 
                href={contact.social.linkedin} 
                className="text-white hover:text-[#fdca3f] transition-colors"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </Link>
              <Link 
                href={contact.social.facebook} 
                className="text-white hover:text-[#fdca3f] transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-6 h-6" aria-hidden="true" />
              </Link>
              <Link 
                href={contact.social.instagram} 
                className="text-white hover:text-[#fdca3f] transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-6 h-6" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Solutions Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Nos Solutions</h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-[#fdca3f] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6">Notre Entreprise</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-[#fdca3f] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href={`mailto:${contact.email}`}
                  className="flex items-center text-white/90 hover:text-[#fdca3f] transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  {contact.email}
                </Link>
              </li>
              <li>
                <Link 
                  href={`tel:${contact.phone}`}
                  className="flex items-center text-white/90 hover:text-[#fdca3f] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  {contact.phone}
                </Link>
              </li>
              <li className="flex items-start text-white/90">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                {contact.address}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/90 text-sm">
              © {new Date().getFullYear()} ASK Advisory. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}