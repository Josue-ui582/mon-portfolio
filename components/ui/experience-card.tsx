"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:z-10"
    >
      <div className="absolute left-[5px] top-2 bottom-0 w-px bg-border" />
      
      <div className="bg-card rounded-lg p-6">
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-4">
          <span className="font-medium">{company}</span>
          <span className="hidden sm:block sm:mx-2">•</span>
          <span>{period}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}