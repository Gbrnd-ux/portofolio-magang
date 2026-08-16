import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    <html lang="id" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="letterhead"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}