import type { Metadata } from 'next';
import HeroSection from '@/components/ask-for-solutions/HeroSection';
import ExpertiseSection from '@/components/ask-for-solutions/ExpertiseSection';

export const metadata: Metadata = {
  title: 'Nos Solutions RH',
  description: 'Découvrez nos solutions RH sur mesure : conseil RH, coaching, headhunting, formation et team-building. Des expertises complémentaires pour répondre à tous vos enjeux.',
  openGraph: {
    title: 'Nos Solutions RH | ASK Advisory',
    description: 'Découvrez nos solutions RH sur mesure : conseil RH, coaching, headhunting, formation et team-building.',
  },
};

export default function AskForSolutionsPage() {
  return (
    <div>
      <HeroSection />
      <ExpertiseSection />
    </div>
  );
}