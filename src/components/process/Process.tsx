"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Process() {
  const { process } = portfolioData;

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
    <section id="process" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">Workflow</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Development Process
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A systematic approach to delivering high-quality software solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-800"></div>

            <div className="flex flex-col gap-12">
              {process.map((step) => (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  className="relative flex items-start gap-8 md:gap-12 group"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm group-hover:border-blue-500 dark:group-hover:border-blue-500 transition-colors duration-300">
                    <span className="text-xl md:text-2xl font-bold font-heading text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
