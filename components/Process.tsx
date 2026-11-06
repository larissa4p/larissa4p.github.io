"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const steps = [
  { n: "01", title: "Conversa", desc: "Você me conta o negócio, o que vende e o que precisa. Sem formulário, direto no WhatsApp." },
  { n: "02", title: "Proposta", desc: "Escopo, prazo e valor fechado. Sem surpresa no meio do projeto." },
  { n: "03", title: "Desenvolvimento", desc: "Código limpo, responsivo, integrado. Você acompanha o progresso." },
  { n: "04", title: "Entrega", desc: "Site no ar, treinamento incluído. Suporte direto pós-entrega." },
];

export default function Process() {
  return (
    <section id="processo" className="py-16 md:py-28 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Como funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#edfaf2] uppercase tracking-tight mb-10 md:mb-16" style={{ fontFamily: "var(--font-syne)" }}>
            Da conversa ao site no ar<span className="text-[#22c55e]">.</span>
          </h2>
        </AnimateIn>

        <motion.div
          className="grid md:grid-cols-4 gap-6"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-full w-full h-px bg-[#162b1c] -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#061a0d] border border-[#22c55e]/40 flex items-center justify-center">
                  <span className="text-[10px] text-[#22c55e]" style={{ fontFamily: "var(--font-dm-mono)" }}>{step.n}</span>
                </div>
                <h3 className="text-base font-bold text-[#edfaf2] uppercase" style={{ fontFamily: "var(--font-syne)" }}>{step.title}</h3>
                <p className="text-sm text-[#4d7a60] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 pt-8 border-t border-[#162b1c] flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-[#2a4030] uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Processo e resultado se encontram
          </p>
          <a
            href="https://wa.me/5561999157096"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#22c55e] hover:text-[#4ade80] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Começar agora →
          </a>
        </div>
      </div>
    </section>
  );
}
