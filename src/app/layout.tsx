import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

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
      <body className={`${dmSans.className} w-full overflow-x-hidden bg-gray-50 dark:bg-[#0a0f1a] text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <Navbar />
          <main className="w-full min-h-screen flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}