"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Icons to orbit around the profile
  const orbitIcons = [
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", invertInDark: false },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invertInDark: true },
    { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", invertInDark: false },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", invertInDark: false },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", invertInDark: false },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", invertInDark: false },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", invertInDark: false },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", invertInDark: false },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", invertInDark: false },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <motion.div
            className="flex-1 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-1.5 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800/50 shadow-sm">
                <span className="relative flex h-2 w-2 inline-block mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {personal.status}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold font-heading text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 min-h-[4rem] sm:min-h-[3rem] flex items-center">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Mobile App Developer', 'Software Engineer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed font-medium">
              {personal.longDescription}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 group">
                View My Work
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 font-medium rounded-lg shadow-sm transition-all">
                Let&apos;s Connect
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a href={`mailto:${personal.email}`} className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual Element - Profile Image with Orbiting Icons */}
          <motion.div
            className="flex-1 w-full max-w-lg hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* The circular track for orbiting icons */}
            <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-gray-300 dark:border-gray-700/50 flex items-center justify-center">

              {/* Inner Circle / Profile Picture */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#0a0a0a] z-10 shadow-2xl bg-gray-100 dark:bg-gray-900">
                <Image
                  src="/profile.png"
                  alt={personal.name}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0 rounded-full animate-[spin_30s_linear_infinite]">
                {orbitIcons.map((item, i) => {
                  const angle = (i * 360) / orbitIcons.length;
                  const radius = 50; // percentage
                  // Round to 4 decimal places to prevent hydration mismatch
                  const y = (radius * Math.cos(angle * Math.PI / 180)).toFixed(4);
                  const x = (radius * Math.sin(angle * Math.PI / 180)).toFixed(4);
                  const top = `calc(50% - ${y}%)`;
                  const left = `calc(50% + ${x}%)`;

                  return (
                    <div
                      key={item.name}
                      className="absolute w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-[#151515] rounded-full shadow-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                      style={{ top, left }}
                      title={item.name}
                    >
                      {/* Counter-spin to keep icons upright */}
                      <div className="animate-[spin_30s_linear_infinite_reverse] flex items-center justify-center w-full h-full p-2.5">
                        <img
                          src={item.src}
                          alt={item.name}
                          className={`w-full h-full object-contain ${item.invertInDark ? 'dark:invert' : ''}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
