"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xojrbwra", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setMessage("Pesan terkirim! Terima kasih atas perhatiannya.");
        setMessageType("success");
        form.reset();
      } else {
        setMessage("Gagal mengirim. Coba lagi.");
        setMessageType("error");
      }
    } catch {
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open for Internship
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Hubungi <span className="gradient-text font-black">Saya</span>
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-5" />
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid gap-3 mb-10 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:gibrandpradana@gmail.com"
            variants={itemVariants}
            className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-white/[0.02] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <HiMail className="text-lg" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-200">Email</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">gibrandpradana@gmail.com</div>
            </div>
          </motion.a>

          <motion.a
            href="tel:+6287745673071"
            variants={itemVariants}
            className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-white/[0.02] hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <HiPhone className="text-lg" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-200">Telepon / WA</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">+62 877-4567-3071</div>
            </div>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-[#111827] border border-gray-200/80 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <motion.form onSubmit={handleSubmit} className="space-y-5" variants={itemVariants}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-500 text-sm"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-500 text-sm"
                  placeholder="youremail@gmail.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-500 text-sm"
                placeholder="Apa yang ingin dibicarakan?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Pesan
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-500 resize-none text-sm"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 dark:border-gray-900/30 border-t-white dark:border-t-gray-900 rounded-full animate-spin"></span>
                  Mengirim...
                </span>
              ) : (
                "Kirim Pesan"
              )}
            </button>

            {/* Success/Error Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-3.5 rounded-xl text-sm font-medium text-center ${
                  messageType === "success"
                    ? "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200/60 dark:border-green-500/20"
                    : "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200/60 dark:border-red-500/20"
                }`}
              >
                {message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-14 text-center space-y-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400 dark:text-gray-500 text-xs font-medium tracking-wider uppercase">
            Media sosial
          </p>
          <div className="flex justify-center gap-3">
            {[
              { name: "GitHub", url: "https://github.com/Gbrnd-ux", icon: <FaGithub /> },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/gibrand-pradana-bb3607332/", icon: <FaLinkedin /> },
              { name: "Twitter", url: "https://x.com/Gibrand1100", icon: <FaTwitter /> },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-10 h-10 rounded-lg bg-white/60 dark:bg-white/[0.03] border border-gray-200/60 dark:border-gray-800/60 text-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;