"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-heading font-bold tracking-tight text-gray-900 dark:text-white group">
          <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg shadow-sm group-hover:bg-blue-700 transition-colors">ZA</span>
          <span>Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <ThemeToggle />
            <a
              href={personal.resume}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] shadow-lg border-t border-gray-200 dark:border-gray-800 lg:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300">
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300">
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
                <a
                  href={personal.resume}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center flex-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
