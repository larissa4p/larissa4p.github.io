"use client";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* glow isolado — overflow-hidden só aqui, não na section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(34,197,94,0.06), transparent)"
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-24">

        {/* Label */}
        <motion.p
          className="text-[10px] tracking-widest uppercase text-[#4d7a60] mb-6 flex items-center gap-2 font-[family-name:var(--font-dm-mono)]"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          Disponível para novos projetos
        </motion.p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <h1
            className="font-black leading-[0.88] tracking-tighter uppercase mb-4 text-[clamp(2.4rem,8vw,8rem)] font-[family-name:var(--font-syne)]"
          >
            <span className="block text-[#edfaf2]">Sites que vendem.</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: "2px #22c55e" }}>
              Automações que atendem.
            </span>
          </h1>
        </motion.div>

        {/* Sub + CTAs */}
        <motion.div
          className="max-w-xl mt-8 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
        >
          <p className="text-[#8ab89a] text-base md:text-lg leading-relaxed font-[family-name:var(--font-inter)]">
            WordPress, landing pages e chatbots para WhatsApp — sem page builder, sem gambiarra, sem terceirizar.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5561999157096"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-[#22c55e] text-[#050a07] font-semibold text-sm hover:bg-[#4ade80] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#22c55e]/20 font-[family-name:var(--font-inter)]"
            >
              Chamar no WhatsApp →
            </a>
            <a
              href="#projetos"
              className="text-sm text-[#4d7a60] hover:text-[#edfaf2] transition-colors font-[family-name:var(--font-inter)]"
            >
              Ver projetos
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 pt-2">
            {["5 anos de experiência", "15+ projetos entregues", "Código sem page builder"].map((s) => (
              <span
                key={s}
                className="text-[10px] px-3 py-1.5 rounded-full bg-[#0c1810] border border-[#162b1c] text-[#4d7a60] font-[family-name:var(--font-dm-mono)]"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
