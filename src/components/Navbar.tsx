"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="#home" className="monogram">GP</Link>
        <nav className={`nav-links ${isOpen ? "open" : ""}`} id="navLinks">
          <Link href="#home" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>Tentang</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)}>Keahlian</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Proyek</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Kontak</Link>
        </nav>
        <button 
          className="nav-toggle" 
          id="navToggle" 
          aria-label="Buka menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}