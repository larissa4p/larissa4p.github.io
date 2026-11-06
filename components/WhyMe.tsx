"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const items = [
  { n: "01", title: "Código próprio", desc: "Sem Elementor, sem dependência de plugin de R$300/ano. Seu site é seu de verdade." },
  { n: "02", title: "Prazo real", desc: "Combino uma data e entrego nela. Se algo mudar, você sabe antes de perguntar." },
  { n: "03", title: "Integração de verdade", desc: "WhatsApp, Supabase, Salesforce, SendGrid — conecto o que o seu negócio precisa." },
  { n: "04", title: "Suporte direto", desc: "Sem chamado, sem ticket. Me chama no WhatsApp mesmo." },
];

export default function WhyMe() {
  return (
    <section id="porque-eu" className="py-16 md:py-28 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Por que eu
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#edfaf2] uppercase tracking-tight mb-10 md:mb-16" style={{ fontFamily: "var(--font-syne)" }}>
            Compromisso direto<br />em cada etapa<span className="text-[#22c55e]">.</span>
          </h2>
        </AnimateIn>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((item) => (
            <motion.div
              key={item.n}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="group p-7 rounded-2xl bg-[#0c1810] border border-[#162b1c] hover:border-[#22c55e]/30 transition-colors duration-300"
            >
              <span className="text-[10px] text-[#22c55e] mb-4 block" style={{ fontFamily: "var(--font-dm-mono)" }}>{item.n}</span>
              <h3 className="text-lg font-bold text-[#edfaf2] mb-2 uppercase" style={{ fontFamily: "var(--font-syne)" }}>{item.title}</h3>
              <p className="text-sm text-[#4d7a60] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
