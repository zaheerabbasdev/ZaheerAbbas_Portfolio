"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faLaptopCode, faGraduationCap, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export function About() {
  const { projects } = portfolioData;

  const currentYear = new Date().getFullYear();
  // Assume start of career / degree was 2022
  const yearsOfExperience = currentYear - 2022;
  const completedProjects = projects.filter(p => p.status === "Completed").length;

  const stats = [
    { label: "Years Experience", value: `${yearsOfExperience}+`, icon: faCalendarAlt },
    { label: "Projects Completed", value: completedProjects, icon: faCodeBranch },
    { label: "Technologies", value: "15+", icon: faLaptopCode },
    { label: "Degree", value: "BSCS", icon: faGraduationCap },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Stats Grid */}
          <motion.div
            className="flex-1 w-full grid grid-cols-2 gap-6 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50 dark:opacity-30 -z-10"></div>
            
            {stats.map((stat, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/70 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-none text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={stat.icon} className="w-6 h-6" />
                </div>
                <div className="text-4xl font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="flex-1 w-full lg:pl-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-8 leading-tight">
              Engineering solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">modern web & mobile.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                I hold a Bachelor&apos;s degree in Computer Science and specialize as a Full Stack Developer and Mobile App Developer. My journey in software engineering has been driven by a passion for creating impactful, real-world products.
              </p>
              <p>
                Whether it&apos;s architecting scalable backend systems, designing intuitive frontend interfaces, or building cross-platform mobile apps with Flutter, I enjoy learning new technologies and applying them to solve complex business problems.
              </p>
              <p>
                My focus isn&apos;t just on writing code; it&apos;s on delivering end-to-end solutions that are maintainable, efficient, and provide an excellent user experience.
              </p>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Let&apos;s discuss your next project 
                <FontAwesomeIcon icon={faCodeBranch} className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
