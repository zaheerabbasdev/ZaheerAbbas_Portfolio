"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#111]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">My Journey</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-100 dark:border-blue-900/30 items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className={`bg-white dark:bg-[#1a1a1a] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 ${
                    index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium whitespace-nowrap">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3 mr-1.5" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400 font-medium">
                      <div className="flex items-center text-gray-900 dark:text-gray-200">
                        <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                        {exp.company}
                        <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                        {exp.type}
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-50 dark:bg-[#222] text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-100 dark:border-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
