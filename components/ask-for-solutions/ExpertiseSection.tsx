"use client";

import { motion } from 'framer-motion';
import { Users2, Target, Award, Puzzle, Brain } from 'lucide-react';
import ExpertiseCard from './ExpertiseCard';

const expertises = [
  {
    icon: Users2,
    title: "CONSEIL RH",
    tagline: "Révélez la force cachée de vos ressources humaines.",
    description: `Votre entreprise évolue dans un environnement en constante mutation. Les attentes
    des collaborateurs changent, les besoins organisationnels deviennent plus
    complexes, et les processus traditionnels ne suffisent plus à répondre aux
    défis actuels.`,
    question: "Vous vous demandez comment aligner vos ressources humaines sur vos ambitions stratégiques tout en restant fidèle à vos valeurs ?",
    solution: `Chez ASK Advisory, nous transformons vos ressources humaines en un
    levier stratégique. Notre équipe vous accompagne pour optimiser vos politiques
    RH, moderniser vos processus, et anticiper les changements à venir.`,
    benefits: [
      "Aligner vos politiques RH sur vos objectifs stratégiques",
      "Renforcer la gestion des talents pour attirer et fidéliser les meilleurs profils",
      "Accompagner le changement avec des outils et méthodes éprouvées",
      "Optimiser vos processus pour gagner en efficacité et en agilité"
    ],
    cta: "Prêts à transformer vos ressources humaines en un moteur de performance durable ?"
  },
  {
    icon: Target,
    title: "CHASSE DE TÊTE",
    tagline: "Débusquer les talents, façonner l'avenir de vos équipes.",
    description: `Le recrutement est une étape décisive pour toute entreprise. Les équipes
    doivent s'adapter, de nouvelles compétences deviennent indispensables, et le
    marché regorge de talents… mais comment repérer celui qui fera la différence ?`,
    question: "Êtes-vous prêt à transformer ce défi en opportunité stratégique ?",
    solution: `Chez ASK Advisory, nous savons que chaque talent est unique, tout
    comme les besoins de votre entreprise. Grâce à une méthodologie rigoureuse et
    un réseau étendu, nous identifions les profils qui s'alignent parfaitement avec
    vos objectifs.`,
    benefits: [
      "Attirer des talents rares et hautement qualifiés",
      "Garantir un processus de recrutement sur-mesure, adapté à vos enjeux spécifiques",
      "Sécuriser vos recrutements grâce à une méthodologie éprouvée",
      "Accélérer l'intégration des nouveaux collaborateurs pour maximiser leur impact"
    ],
    cta: "Prêts à trouver les talents qui transformeront votre entreprise ?"
  },
  {
    icon: Brain,
    title: "COACHING",
    tagline: "Inspirez vos équipes, développez les talents, dépassez vos objectifs.",
    description: `Les défis professionnels sont nombreux : responsabilités croissantes,
    objectifs ambitieux, ou transitions complexes. Que ce soit pour un manager, un
    expert ou un collaborateur, le besoin de progresser et de trouver des solutions
    concrètes est essentiel.`,
    question: "Comment accompagner vos équipes dans cette évolution ?",
    solution: `Chez ASK Advisory, nous croyons que chaque collaborateur, quel que
    soit son rôle, a un potentiel unique à révéler. Nos programmes de coaching,
    individuels et collectifs, sont conçus pour répondre aux besoins spécifiques de
    vos équipes.`,
    benefits: [
      "Accompagner vos collaborateurs dans leur développement personnel et professionnel",
      "Renforcer la confiance et l'efficacité dans des contextes variés",
      "Faciliter la gestion des transitions ou des défis complexes",
      "Créer un environnement de travail épanouissant et performant"
    ],
    cta: "Prêts à accompagner vos équipes vers leur plein potentiel ?"
  },
  
  {
    icon: Award,
    title: "FORMATION",
    tagline: "Apprenez, évoluez, dépassez vos attentes.",
    description: `Les compétences qui ont fait le succès d'hier ne suffiront pas toujours à
    relever les défis de demain. Dans un monde en perpétuelle évolution, vos
    équipes doivent s'adapter, innover, et anticiper.`,
    question: "Comment s'assurer que chaque collaborateur dispose des outils nécessaires pour grandir ?",
    solution: `Chez ASK Advisory, nous concevons des formations sur-mesure, pensées
    pour répondre aux enjeux spécifiques de votre entreprise. Nos programmes sont conçus
    pour avoir un impact immédiat et durable.`,
    benefits: [
      "Renforcer les compétences clés pour répondre aux enjeux stratégiques",
      "Accompagner vos collaborateurs dans leur évolution professionnelle",
      "Favoriser l'innovation et la créativité au sein des équipes",
      "Soutenir un environnement de travail collaboratif et motivant"
    ],
    cta: "Prêts à investir dans les talents de vos équipes ?"
  },
  {
    icon: Puzzle,
    title: "TEAM-BUILDING",
    tagline: "Unir les talents pour des succès collectifs.",
    description: `Une équipe talentueuse et compétente peut accomplir de grandes choses, mais
    sans collaboration, les efforts individuels peinent à se transformer en
    résultats collectifs.`,
    question: "Comment renforcer la cohésion et l'engagement pour créer une équipe véritablement alignée et performante ?",
    solution: `Chez ASK Advisory, nous croyons que la réussite collective repose
    sur des liens solides et une dynamique de groupe positive. Nos activités de
    team-building sont conçues pour répondre aux besoins spécifiques de vos
    équipes.`,
    benefits: [
      "Renforcer la cohésion et la communication au sein des équipes",
      "Créer un environnement de travail motivant et collaboratif",
      "Stimuler la créativité et l'innovation collective",
      "Améliorer la performance globale grâce à une équipe alignée"
    ],
    cta: "Prêts à transformer vos équipes en une force collective performante ?"
  }
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-24">
          {expertises.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.title}
              expertise={expertise}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}