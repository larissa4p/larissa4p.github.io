"use client";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const projects = [
  {
    num: "01",
    name: "MTEC",
    type: "Plataforma",
    desc: "Catálogo com 900+ listagens, integração bidirecional com Salesforce, geração de PDF e pipeline de imagens com IA.",
    tags: ["WordPress", "Salesforce", "Node.js"],
    url: "https://mtec.com.vc",
  },
  {
    num: "02",
    name: "DOQ.APP",
    type: "SaaS",
    desc: "Plataforma de atendimento com chatbot WhatsApp, painel kanban e backend Supabase com realtime.",
    tags: ["WhatsApp API", "Supabase", "Docker"],
    url: "https://doq.app",
  },
  {
    num: "03",
    name: "SINDJUS",
    type: "Portal",
    desc: "Portal sindical com área restrita, transmissão ao vivo via YouTube API e drag-and-drop de conteúdo.",
    tags: ["WordPress", "PHP", "AJAX"],
    url: "https://sindjus.org",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-28 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#edfaf2] uppercase tracking-tight mb-10 md:mb-16" style={{ fontFamily: "var(--font-syne)" }}>
            Projetos reais<span className="text-[#22c55e]">.</span>
          </h2>
        </AnimateIn>

        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((p) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="group flex flex-col gap-5 p-6 rounded-2xl bg-[#0c1810] border border-[#162b1c] hover:border-[#22c55e]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#4d7a60]" style={{ fontFamily: "var(--font-dm-mono)" }}>{p.num} — {p.type}</span>
                <span className="text-[#2a4030] group-hover:text-[#22c55e] transition-colors text-sm">↗</span>
              </div>
              <h3 className="text-2xl font-black text-[#edfaf2] uppercase" style={{ fontFamily: "var(--font-syne)" }}>{p.name}</h3>
              <p className="text-sm text-[#4d7a60] leading-relaxed flex-1" style={{ fontFamily: "var(--font-inter)" }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-[#061a0d] border border-[#1a3824] text-[#4d7a60]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
