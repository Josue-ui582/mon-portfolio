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
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            Je suis un développeur FullStack spécialisé dans la création d&apos;applications web modernes
            et performantes. Avec plus deux ans d&apos;expérience dans le développement web,
            je combine créativité et expertise technique pour donner vie à des projets innovants. Si je trouve un peu du temps je m&apos;amuse à créer des applications Full-Stack avec Node JS.
          </p>
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