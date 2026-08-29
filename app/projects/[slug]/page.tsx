import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <Navbar />
      
      <article className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </header>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-xl border border-gray-100 dark:border-gray-800">
            <Image
              src={project.image || "/projects/placeholder.png"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              
              <section>
                <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </section>

              {project.problem && (
                <section>
                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">The Problem</h2>
                  <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </section>
              )}

              {project.solution && (
                <section>
                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">The Solution</h2>
                  <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </section>
              )}

              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Links</h3>
                <div className="space-y-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-900 dark:text-white transition-all group">
                      <span className="flex items-center font-medium text-sm">
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                        Source Code
                      </span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    </a>
                  ) : (
                    <div className="p-3 text-sm text-gray-500 dark:text-gray-400 italic bg-gray-100 dark:bg-gray-800/50 rounded-xl">
                      Source code not publicly available
                    </div>
                  )}
                  
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all group shadow-md shadow-blue-500/20">
                      <span className="flex items-center font-medium text-sm">
                        Live Demo
                      </span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <div className="p-3 text-sm text-gray-500 dark:text-gray-400 italic bg-gray-100 dark:bg-gray-800/50 rounded-xl">
                      Live demo not available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
