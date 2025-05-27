"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold uppercase">Josué HOUNHOUI</Link>

          <div className="hidden md:flex justify-center items-center space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/projets" className="hover:text-primary transition-colors">
              Projets
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted transition-colors relative p-2"
              >
                {theme === 'dark' ? (
                <Sun className="h-5 w-5 transition-transform rotate-0 scale-100" />
              ) : (
                <Moon className="h-5 w-5 transition-transform rotate-0 scale-100" />
              )}
            </button>
          </div>

          {/* Bouton Menu / Close pour mobile */}
          <div className="flex justify-center items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted transition-colors relative p-2 md:hidden"
              >
                {theme === 'dark' ? (
                <Sun className="h-5 w-5 transition-transform rotate-0 scale-100" />
              ) : (
                <Moon className="h-5 w-5 transition-transform rotate-0 scale-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)} // Fermer le menu après le clic
            >
              Accueil
            </Link>
            <Link
              href="/projets"
              className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}