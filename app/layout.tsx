import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://askadvisory.ma'),
  title: {
    default: 'ASK Advisory | Cabinet de Conseil RH au Maroc',
    template: '%s | ASK Advisory'
  },
  description: 'Cabinet de conseil RH spécialisé dans le coaching, la formation, le headhunting et le team-building. Solutions sur mesure pour transformer vos défis RH en opportunités.',
  keywords: ['conseil RH', 'coaching', 'formation', 'headhunting', 'team-building', 'ressources humaines', 'Maroc', 'Rabat'],
  authors: [{ name: 'ASK Advisory' }],
  creator: 'ASK Advisory',
  publisher: 'ASK Advisory',
  icons: {
    icon: 'https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/favicon.ico',
    shortcut: 'https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/askadvisory/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://askadvisory.ma',
    title: 'ASK Advisory | Cabinet de Conseil RH au Maroc',
    description: 'Cabinet de conseil RH spécialisé dans le coaching, la formation, le headhunting et le team-building. Solutions sur mesure pour transformer vos défis RH en opportunités.',
    siteName: 'ASK Advisory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASK Advisory | Cabinet de Conseil RH au Maroc',
    description: 'Cabinet de conseil RH spécialisé dans le coaching, la formation, le headhunting et le team-building.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}