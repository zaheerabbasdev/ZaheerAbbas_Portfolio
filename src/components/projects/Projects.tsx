"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">Portfolio</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={project.id}
                className="group flex flex-col bg-white dark:bg-[#0d1117] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-400/60 dark:hover:border-blue-700/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)]"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={project.image || "/projects/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d1117] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Number & Category */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-600 dark:text-blue-500 font-bold text-sm tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800/50 text-gray-500 text-xs font-medium border border-gray-200 dark:border-gray-800">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Details */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors group/link"
                  >
                    View Details
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

