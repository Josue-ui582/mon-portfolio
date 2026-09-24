"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences, skills } from "@/lib/about-data";

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="À Propos de Moi"
          subtitle="Passionné par le développement web et la création d'expériences utilisateur exceptionnelles"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-lg text-muted-foreground leading-relaxed text-justify">
            <p>
            Mon parcours débute en 2021 à l'Université d'Abomey-Calavi en Physique-Chimie, une formation exigeante qui a forgé ma rigueur scientifique, ma capacité d'analyse et mon goût pour la résolution de problèmes complexes. Captivé par le pouvoir de création du code, j'ai entrepris dès 2023 une transition déterminée vers le développement web en autodidacte. Cette démarche autonome, combinée à une discipline quotidienne, m'a permis de dompter l'écosystème JavaScript moderne (React, Next.js, Node.js) et d'architecturer des applications web performantes, élégantes et orientées produit.
          </p>
          <br />
          <p>
            Aujourd'hui, guidé par une volonté constante d'innovation, j'élargis mes horizons en tant que boursier chez DataCamp pour me spécialiser en Ingénierie du Machine Learning. En combinant mon socle scientifique, ma maîtrise Fullstack et la puissance de l'Intelligence Artificielle, je ne me contente plus de bâtir des interfaces modernes : je conçois des systèmes intelligents, capables d'exploiter la donnée pour offrir une réelle valeur décisionnelle. Cette double expertise software et IA est la garantie de solutions d'ingénierie robustes, pérennes et taillées pour les défis de demain.
          </p>
          </div>
        </motion.div>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Compétences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6"
              >
                <h4 className="text-xl font-semibold capitalize mb-4">{category}</h4>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section ref={ref}>
          <h3 className="text-2xl font-bold mb-8">Expérience</h3>
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title}
                {...experience}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}