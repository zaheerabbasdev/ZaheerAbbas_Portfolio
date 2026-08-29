"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { portfolioData } from "@/data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// EmailJS credentials are loaded from .env.local
// See .env.local.example for the required variable names
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

const contactSchema = z.object({
  name:    z.string().min(2,  "Name must be at least 2 characters"),
  email:   z.string().email(  "Please enter a valid email address"),
  subject: z.string().min(5,  "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { personal } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Guard: check env vars are loaded
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS env vars missing. Check .env.local and restart dev server.");
      setSubmitStatus("error");
      setErrorMessage("Email service is not configured. Please contact me directly.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  data.name,
          from_email: data.email,
          subject:    data.subject,
          message:    data.message,
          to_email:   personal.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS success:", response.status, response.text);
      setSubmitStatus("success");
      reset();
    } catch (error: unknown) {
      // EmailJS throws an object with { status, text } on failure
      const ejsError = error as { status?: number; text?: string };
      const reason = ejsError?.text ?? "Unknown error";
      console.error("EmailJS error:", ejsError?.status, reason);
      setSubmitStatus("error");
      setErrorMessage(`Failed to send (${reason}). Please email me directly at ${personal.email}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#111]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* ── Contact Info ── */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-blue-600 dark:text-blue-400 font-medium tracking-wider uppercase text-sm mb-2">Get in touch</h3>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              Let&apos;s build something useful.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              Have a project, idea, or opportunity? I&apos;d be happy to discuss how we can turn it into a working product.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personal.email}`} className="flex items-center p-4 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Me</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{personal.email}</div>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 shadow-sm hover:shadow-md transition-all">
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white shadow-sm hover:shadow-md transition-all">
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-[#1a1a1a] p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border ${errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-400`}
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-400`}
                      placeholder="john@example.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border ${errors.subject ? "border-red-500" : "border-gray-200 dark:border-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors text-gray-900 dark:text-white placeholder-gray-400`}
                    placeholder="Project Inquiry"
                    {...register("subject")}
                  />
                  {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border ${errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-800"} focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none text-gray-900 dark:text-white placeholder-gray-400`}
                    placeholder="Tell me about your project..."
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 dark:text-green-300 text-sm font-medium">
                      Message sent successfully! I&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3"
                  >
                    <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 dark:text-red-300 text-sm font-medium">
                      {errorMessage || "Something went wrong. Please try again or email me directly."}
                    </p>
                  </motion.div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
