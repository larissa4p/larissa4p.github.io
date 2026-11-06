"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,10,7,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #162b1c" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#edfaf2] font-bold text-sm tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
          Larissa Bessa
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {[["PROCESSO", "#processo"], ["PROJETOS", "#projetos"], ["FAQ", "#faq"]].map(([label, href]) => (
            <a key={href} href={href} className="text-[10px] tracking-widest text-[#4d7a60] hover:text-[#edfaf2] transition-colors" style={{ fontFamily: "var(--font-dm-mono)" }}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5561999157096"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#22c55e] text-[#050a07] hover:bg-[#4ade80] hover:-translate-y-0.5 transition-all duration-200"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="hidden sm:inline">Falar no </span>WhatsApp
        </a>
      </div>
    </header>
  );
}
