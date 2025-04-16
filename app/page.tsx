"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Palette, Database } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Développeur FullStack
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Spécialisé dans la création d&apos;interfaces modernes et réactives, le développement des applications FullStack, j'utilse au quotidien des technologies modernes pour créer des solutions utiles pour une meilleure expérience utilisateur. Vous avez une idée projet ou une proposition de collaboration professionnelle ? Discutons de tout ce qui vous amène maintenant.
            </p>
            <div className="flex md:flex-row flex-col gap-6">
              <Link
                href="/projets"
                className="flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-center rounded-full hover:opacity-90 transition-opacity"
              >
                <span>Voir mes projets</span>
                <ArrowRight className="ml-2 h-5 w-5 animate-slide" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center px-6 py-3 bg-transparent text-white-foreground text-center rounded-full border hover:opacity-90 transition-opacity"
              >
                <span>Contactez-moi</span>
                <ArrowRight className="ml-2 h-5 w-5 animate-slide" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full aspect-square max-w-md mx-auto"

          >
            <Image
              src="/hero1.jpg"
              alt="Portrait"
              fill
              className="object-cover rounded-full border-4 border-background"
            />
          </motion.div>

        </div>

        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30" />
          <div className="absolute inset-0 bg-grid-pattern" />
        </motion.div>
      </section>

      <section
        ref={ref}
        className="py-20 px-4 bg-muted/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Mes Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card"
              >
                <div className="mb-4 flex justify-center">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const technologies = [
  {
    title: "Frontend Frameworks",
    description: "React.js, Next.js, Typescript",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    title: "Backend Frameworks",
    description: "Node.JS, Express.JS",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    title: "Base de données",
    description: "Postgresql, MySQL, MongoDB",
    icon: <Database className="w-8 h-8 text-primary" />,
  },
  {
    title: "Styles",
    description: "CSS3, Tailwind CSS",
    icon: <Palette className="w-8 h-8 text-primary" />,
  },
  {
    title: "UI/UX",
    description: "Responsive Design, Animations, Intégration de maquette Figma",
    icon: <Layout className="w-8 h-8 text-primary" />,
  },
];