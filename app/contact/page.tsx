import type { Metadata } from 'next';
import ContactPage from '@/components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contactez-nous',
  description: 'Contactez ASK Advisory pour vos projets RH. Notre équipe est à votre écoute pour vous accompagner dans vos défis RH à Rabat et partout au Maroc.',
  openGraph: {
    title: 'Contactez-nous | ASK Advisory',
    description: 'Contactez ASK Advisory pour vos projets RH. Notre équipe est à votre écoute.',
  },
};

export default function Page() {
  return <ContactPage />;
}