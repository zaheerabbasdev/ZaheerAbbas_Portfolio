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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-2xl font-heading font-bold tracking-tight text-gray-900 dark:text-white mb-6 group">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-md shadow-sm group-hover:bg-blue-700 transition-colors text-lg">ZA</span>
              <span>Portfolio</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-6 leading-relaxed">
              {personal.longDescription.split('.')[0]}.
            </p>
            <div className="flex gap-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700 shadow-sm hover:shadow transition-all">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-[#0A66C2] dark:hover:border-[#0A66C2] shadow-sm hover:shadow transition-all">
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About Me</Link></li>
              <li><Link href="/#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Technologies</Link></li>
              <li><Link href="/#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Featured Projects</Link></li>
              <li><Link href="/#experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Work Experience</Link></li>
              <li><Link href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</Link></li>
              <li><Link href="/#process" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Development Process</Link></li>
              <li><Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Expertise</h4>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-400 font-medium">Full Stack Web Dev</li>
              <li className="text-gray-600 dark:text-gray-400 font-medium">Cross-Platform Mobile</li>
              <li className="text-gray-600 dark:text-gray-400 font-medium">REST API Design</li>
              <li className="text-gray-600 dark:text-gray-400 font-medium">Database Architecture</li>
              <li className="text-gray-600 dark:text-gray-400 font-medium">Cloud Integrations</li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                </span>
                <a href={`mailto:${personal.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personal.email}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                </span>
                {personal.location} (Remote)
              </p>
              <p className="flex items-center gap-3 mt-6">
                <span className="inline-flex relative w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500"></span>
                </span>
                <span className="text-green-600 dark:text-green-400 font-semibold">{personal.status}</span>
              </p>
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
