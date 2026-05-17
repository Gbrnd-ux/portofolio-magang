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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-semibold text-blue-600 dark:text-blue-300 mb-4">
            Get in Touch
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hubungi <span className="gradient-text">Saya</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. Saya akan merespons secepat mungkin!
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid gap-4 mb-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:your-email@example.com"
            variants={itemVariants}
            className="group glass-effect rounded-xl p-5 sm:p-6 border border-white/20 dark:border-gray-700/20 hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:bg-blue-500/10"
          >
            <HiMail className="text-3xl text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">gibrandpradana@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            variants={itemVariants}
            className="group glass-effect rounded-xl p-5 sm:p-6 border border-white/20 dark:border-gray-700/20 hover:border-indigo-400/50 dark:hover:border-indigo-600/50 transition-all duration-300 hover:bg-indigo-500/10"
          >
            <HiPhone className="text-3xl text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">Telepon</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">+62 877 4567 3071</p>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.form onSubmit={handleSubmit} className="space-y-4" variants={itemVariants}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 glass-effect border border-white/20 dark:border-gray-700/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 glass-effect border border-white/20 dark:border-gray-700/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="youremail@gmail.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full px-4 py-3 glass-effect border border-white/20 dark:border-gray-700/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-400"
                placeholder="Apa yang ingin dibicarakan?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Pesan
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 glass-effect border border-white/20 dark:border-gray-700/20 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={itemVariants}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Mengirim...
                </span>
              ) : (
                "Kirim Pesan 📬"
              )}
            </motion.button>

            {/* Success/Error Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-lg text-sm font-medium text-center ${
                  messageType === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                }`}
              >
                {message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 text-center space-y-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Atau ikuti saya di media sosial
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: "GitHub", url: "https://github.com/Gbrnd-ux", icon: <FaGithub /> },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/gibrand-pradana-bb3607332/", icon: <FaLinkedin /> },
              { name: "Twitter", url: "https://x.com/Gibrand1100", icon: <FaTwitter /> },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-2xl hover:scale-125 transition-transform hover:opacity-70"
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