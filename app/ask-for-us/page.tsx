import type { Metadata } from 'next';
import HeroSection from '@/components/ask-for-us/HeroSection';
import VisionSection from '@/components/ask-for-us/VisionSection';
import ValuesSection from '@/components/ask-for-us/ValuesSection';
import FoundersSection from '@/components/ask-for-us/FoundersSection';
import AgencySection from '@/components/ask-for-us/AgencySection';

export const metadata: Metadata = {
  title: 'À Propos de Nous',
  description: 'Découvrez ASK Advisory, cabinet de conseil RH au Maroc. Notre vision, nos valeurs et notre équipe d\'experts dédiés à votre réussite.',
  openGraph: {
    title: 'À Propos de Nous | ASK Advisory',
    description: 'Découvrez ASK Advisory, cabinet de conseil RH au Maroc. Notre vision, nos valeurs et notre équipe.',
  },
};

export default function AskForUsPage() {
  return (
    <div>
      <HeroSection />
      <AgencySection />
      <VisionSection />
      <ValuesSection />
      <FoundersSection />
    </div>
  );
}