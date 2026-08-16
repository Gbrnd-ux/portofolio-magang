"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

export default function TiltCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Increased rotation limits for MORE 3D effect
    const rotateX = ((y - centerY) / centerY) * -22;
    const rotateY = ((x - centerX) / centerX) * 22;
    
    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out"
    });

    // Calculate glare position based on mouse
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
      opacity: 1,
      transition: "opacity 0.2s ease"
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.6s ease"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style, willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {/* Glare Layer */}
      <div 
        className="pointer-events-none absolute inset-0 z-50 rounded-inherit"
        style={glareStyle}
      />
      {/* Content */}
      <div className="w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
