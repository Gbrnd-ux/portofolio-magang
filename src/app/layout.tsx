import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gibrand Putra | Portofolio",
  description: "Calon frontend developer magang yang siap berkontribusi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/* Tambahkan w-full dan overflow-x-hidden di sini */}
      <body className={`${inter.className} w-full overflow-x-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/20 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <Navbar />
          {/* Tambahkan w-full di sini */}
          <main className="w-full min-h-screen flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}