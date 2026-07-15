export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "0",
    title: "GFLIX — Movie Streaming",
    description: "Platform streaming film modern terinspirasi Netflix dengan fitur autentikasi, watchlist, like system, pencarian real-time, built-in ad blocker, dan UI premium dark theme dengan glassmorphism.",
    tech: ["React", "TypeScript", "Vite", "React Router", "CSS"],
    githubUrl: "https://github.com/Gbrnd-ux/GFLIX",
    image: "https://opengraph.githubassets.com/1/Gbrnd-ux/GFLIX",
  },
  {
    id: "1",
    title: "TabungYuk",
    description: "Aplikasi tabungan online yang memungkinkan pengguna mengumpulkan dana bersama untuk tujuan tertentu. Dibangun dengan React dan Vite untuk performa optimal.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Gbrnd-ux/TabungYuk",
    image: "https://opengraph.githubassets.com/1/Gbrnd-ux/TabungYuk",
  },
  {
    id: "2",
    title: "TokoKu E-Commerce",
    description: "Platform e-commerce full-stack dengan fitur autentikasi, keranjang belanja, dan dashboard admin. Menggunakan React untuk frontend dan Node.js untuk backend.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT"],
    githubUrl: "https://github.com/Gbrnd-ux/TokoKu",
    image: "https://opengraph.githubassets.com/1/Gbrnd-ux/TokoKu",
  },
  {
    id: "4",
    title: "My College Tasks",
    description: "Aplikasi mobile Flutter untuk manajemen tugas kuliah dengan fitur prioritas, pencarian, dan pengingat. Mendukung penyimpanan offline dengan SharedPreferences.",
    tech: ["Flutter", "Dart", "SQLite"],
    githubUrl: "https://github.com/Gbrnd-ux/my-college-tasks",
    image: "https://opengraph.githubassets.com/1/Gbrnd-ux/my-college-tasks",
  },
  {
    id: "5",
    title: "Axer AI",
    description: "Platform antarmuka percakapan AI interaktif (Chat Interface) dengan desain modern yang intuitif dan responsif. (Private Project)",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: "6",
    title: "WispBot WhatsApp",
    description: "Bot WhatsApp otomatis terintegrasi yang dirancang untuk merespons pesan dengan cepat, efisien, dan cerdas. (Private Project)",
    tech: ["Node.js", "WhatsApp Web.js"],
  }
];