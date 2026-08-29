"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt, faUniversity } from "@fortawesome/free-solid-svg-icons";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">Background</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#111] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap items-center text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium gap-4">
                    <div className="flex items-center text-gray-900 dark:text-gray-200">
                      <FontAwesomeIcon icon={faUniversity} className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      {edu.institution || "University"}
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                
                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm font-medium whitespace-nowrap border border-gray-100 dark:border-gray-800">
                  <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              
              {edu.description && (
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
