"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faServer, faMobileScreen, faCloud, faTools } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const categoryIcons: Record<string, IconDefinition> = {
  "Frontend": faCode,
  "Backend": faServer,
  "Mobile": faMobileScreen,
  "Databases": faDatabase,
  "Tools": faTools,
  "Cloud / Deployment": faCloud,
};

export function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#111]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">My Expertise</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Technologies & Tools
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive list of the technologies I use to build scalable and maintainable applications.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((category) => (
            <motion.div 
              key={category.category} 
              variants={itemVariants}
              className="flex flex-col"
            >
              <div className="flex items-center mb-6 border-b border-gray-200 dark:border-gray-800 pb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 shadow-sm">
                  <FontAwesomeIcon icon={categoryIcons[category.category] || faCode} className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              
              <div className="flex flex-col gap-6">
                {category.items.map((skill) => {
                  const percentage = skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "75%" : "60%";
                  return (
                    <div key={skill.name} className="w-full group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                          {percentage}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full relative" 
                          initial={{ width: 0 }}
                          whileInView={{ width: percentage }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                        >
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 translate-x-[-100%] group-hover/skill:animate-[shimmer_1.5s_infinite]"></div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
