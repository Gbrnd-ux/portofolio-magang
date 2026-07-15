"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-10 px-4 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-1">
              <span className="text-gray-900 dark:text-white">Gibrand</span>
              <span className="text-gray-400 dark:text-gray-500">.dev</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Frontend Developer passionate about creating beautiful digital experiences.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="#home" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social */}
          <div className="flex gap-2">
            {[
              { url: "https://github.com/Gbrnd-ux", icon: <FaGithub />, title: "GitHub" },
              { url: "https://www.linkedin.com/in/gibrand-pradana-bb3607332/", icon: <FaLinkedin />, title: "LinkedIn" },
              { url: "https://x.com/Gibrand1100", icon: <FaTwitter />, title: "Twitter" },
              { url: "mailto:gibrandpradana@gmail.com", icon: <HiMail />, title: "Email" }
            ].map((s) => (
              <a
                key={s.title}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                title={s.title}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Gibrand Putra. Built with Next.js
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;