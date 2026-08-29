"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faBrain,
  faGraduationCap,
  faGlobe,
  faLaptopCode,
  faRobot,
  faRocket,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";

export function About() {
  const { personal } = portfolioData;

  const aboutCards = [
    {
      id: "story",
      title: "My Story",
      icon: faBriefcase,
      content: `I'm ${personal.name}, a Computer Science student and Full Stack Developer. My professional journey began by building scalable web applications and mobile apps, where I worked on real-world projects and gained valuable experience. Through continuous learning, I have progressed to building complete end-to-end solutions.`,
    },
    {
      id: "build",
      title: "What I Build",
      icon: faCode,
      content: "I build modern, responsive, and user-friendly applications using React.js, Next.js, Node.js, and Flutter. My focus is on writing clean, maintainable code while creating fast and engaging digital experiences. I also have practical experience with Database Architecture and Cloud Integrations.",
    },
    {
      id: "vision",
      title: "My Vision",
      icon: faBrain,
      content: "Artificial Intelligence has become an important part of my learning journey. By exploring AI tools and AI-powered application development, my goal is to become a Full Stack AI Developer who builds intelligent, scalable, and impactful digital products.",
    }
  ];

  const journeySteps = [
    { id: 1, title: "BS Computer Science", subtitle: "Undergraduate", icon: faGraduationCap },
    { id: 2, title: "Freelancer", subtitle: "Self-Employed", icon: faGlobe },
    { id: 3, title: "Full Stack Developer", subtitle: "React.js & Node.js", icon: faLaptopCode },
    { id: 4, title: "Mobile App Developer", subtitle: "Flutter & Dart", icon: faMobileScreen },
    { id: 5, title: "AI Enthusiast", subtitle: "AI-Powered Apps", icon: faRobot },
    { id: 6, title: "Future Goal", subtitle: "Full Stack AI Developer", icon: faRocket },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 leading-tight">
            Turning Ideas Into Modern Web Experiences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
            I&apos;m <span className="font-bold text-gray-900 dark:text-gray-200">{personal.name}</span>, a Full Stack Developer & Mobile App Developer passionate about building responsive websites, robust backends, and AI-powered applications.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column: Cards */}
          <div className="flex-1 w-full space-y-6">
            {aboutCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <FontAwesomeIcon icon={card.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Journey Timeline */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h4 className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-xs mb-2">My Journey</h4>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Journey So Far</h3>
              </div>

              <div className="relative pl-6 md:pl-8 space-y-8">
                {/* Timeline vertical line */}
                <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-gray-800"></div>

                {journeySteps.map((step, idx) => (
                  <div key={step.id} className="relative group">
                    {/* Node */}
                    <div className="absolute -left-[29px] md:-left-[37px] top-0.5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-blue-500 dark:group-hover:border-blue-500 transition-colors shadow-sm z-10">
                      <FontAwesomeIcon icon={step.icon} className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div className="pl-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
