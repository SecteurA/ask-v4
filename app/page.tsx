import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import SolutionsSection from '@/components/SolutionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReferencesSection from '@/components/ReferencesSection';
import ContactBanner from '@/components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ReferencesSection />
      <ContactBanner />
    </div>
  );
}