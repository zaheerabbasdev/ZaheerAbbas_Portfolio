"use client";

import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left max-w-sm">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-gray-900 dark:text-white mb-4 block">
              {personal.name}<span className="text-blue-600 dark:text-blue-400">.</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
              {personal.title}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-white hover:border-[#0A66C2] transition-all">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
              <a href={`mailto:${personal.email}`} className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex gap-12 md:gap-24 text-center md:text-left">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</Link></li>
                <li><Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
                <li><Link href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Other</h4>
              <ul className="space-y-3">
                <li><Link href="#education" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</Link></li>
                <li><Link href="#services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="#process" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Workflow</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
          <div className="text-gray-500 dark:text-gray-500 text-sm">
            Designed & Built with Next.js and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
