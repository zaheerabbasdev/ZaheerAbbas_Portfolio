"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faMobileScreen, faServer, faDatabase, faBriefcase, faShoppingCart, faCloud, faRobot, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const iconMap: Record<string, IconDefinition> = {
  "laptop-code": faLaptopCode,
  "mobile-screen": faMobileScreen,
  "server": faServer,
  "database": faDatabase,
  "briefcase": faBriefcase,
  "shopping-cart": faShoppingCart,
  "cash-register": faShoppingCart,
  "cloud": faCloud,
  "robot": faRobot,
  "bullhorn": faBullhorn,
};

export function Services() {
  const { services } = portfolioData;

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
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#111]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">What I Do</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive development services to bring your ideas from concept to a fully functional product.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={iconMap[service.icon] || faLaptopCode} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
