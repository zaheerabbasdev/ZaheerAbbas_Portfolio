import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faArrowLeft,
  faCheckCircle,
  faCircleExclamation,
  faLightbulb,
  faLayerGroup,
  faCalendarAlt,
  faTag,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find((p) => p.id === resolvedParams.slug);
  const allProjects = portfolioData.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === resolvedParams.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <Navbar />

      <article className="flex-grow pt-28 pb-24">

        {/* ── Full-width Hero Image with overlay ── */}
        <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
          <Image
            src={project.image || "/projects/placeholder.png"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

          <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-16 max-w-7xl mx-auto w-full left-0 right-0">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors mb-6 w-fit">
              <FontAwesomeIcon icon={faArrowLeft} className="w-3.5 h-3.5" />
              Back to Projects
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <FontAwesomeIcon icon={faTag} className="w-3 h-3" />
                {project.category}
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-semibold rounded-full flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCalendarAlt} className="w-3 h-3" />
                {project.year}
              </span>
              <span className={`px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-full ${
                project.status === "Completed"
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}>
                {project.status}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight max-w-4xl">
              {project.title}
            </h1>
          </div>
        </div>

        {/* ── Main Content Area ── */}
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Short description bar */}
          <div className="py-8 border-b border-gray-200 dark:border-gray-800 mb-12">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── LEFT: Content ── */}
            <div className="lg:col-span-2 space-y-14">

              {/* Overview */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FontAwesomeIcon icon={faLayerGroup} className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">Overview</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg pl-12">
                  {project.longDescription}
                </p>
              </section>

              {/* Problem & Solution */}
              {(project.problem || project.solution) && (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.problem && (
                    <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                          <FontAwesomeIcon icon={faCircleExclamation} className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">The Problem</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                          <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">The Solution</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </section>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors"
                      >
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div>
              <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 sticky top-28">
                <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-lg hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 mb-3">Links</h3>
                <div className="space-y-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 text-gray-900 dark:text-white transition-all group shadow-sm"
                    >
                      <span className="flex items-center font-semibold text-sm gap-3">
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        View Source Code
                      </span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    </a>
                  ) : (
                    <div className="p-3.5 text-sm text-gray-500 italic bg-gray-100 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                      Source code not publicly available
                    </div>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all group shadow-md shadow-blue-500/25"
                    >
                      <span className="font-semibold text-sm">View Live Demo</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <div className="p-3.5 text-sm text-gray-500 italic bg-gray-100 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-200 dark:border-gray-700">
                      Live demo not available
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* ── Next Project ── */}
          {nextProject && (
            <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Next Project</p>
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-5">
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                    <Image src={nextProject.image || "/projects/placeholder.png"} alt={nextProject.title} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{nextProject.category}</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {nextProject.title}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm flex-shrink-0">
                  View Project
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          )}

        </div>
      </article>

      <Footer />
    </main>
  );
}
