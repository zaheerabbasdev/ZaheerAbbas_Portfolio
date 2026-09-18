import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCompass } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#0a0a0a]">
      <Navbar />

      <section className="flex-grow flex items-center justify-center relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl -z-10" />
        <div className="absolute bottom-[5%] left-[5%] w-[350px] h-[350px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl -z-10" />

        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-8">
            <FontAwesomeIcon icon={faCompass} className="w-9 h-9" />
          </div>

          <h1 className="text-7xl md:text-8xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 group"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/#projects"
              className="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 font-medium rounded-lg shadow-sm transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
