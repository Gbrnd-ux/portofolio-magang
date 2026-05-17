import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-linear-to-t from-gray-50 dark:from-gray-900 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              My<span className="text-gray-900 dark:text-white">Portofolio</span>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer passionate about creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h4>
            <div className="flex gap-4 text-2xl">
              <a href="https://github.com/Gbrnd-ux" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform opacity-70 hover:opacity-100" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/gibrand-pradana-bb3607332/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform opacity-70 hover:opacity-100" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Gibrand1100" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform opacity-70 hover:opacity-100" title="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:gibrandpradana@gmail.com" className="hover:scale-125 transition-transform opacity-70 hover:opacity-100" title="Email">
                <HiMail />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Gibrand Putra. Dibuat dengan{" "}
            <SiNextdotjs className="inline text-blue-600 dark:text-blue-400 mx-1" />{" "}
            menggunakan Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;