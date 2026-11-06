"use client";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section className="py-16 md:py-28 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <AnimateIn>
            <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Quem faz
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#edfaf2] uppercase tracking-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Cada projeto passa por mim do início ao fim<span className="text-[#22c55e]">.</span>
            </h2>
            <p className="text-[#8ab89a] leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
              Sou Larissa, desenvolvedora com quase 5 anos em WordPress e PHP de verdade — temas e plugins do zero, sem page builder. Trabalho com Salesforce, WhatsApp API, Supabase e Docker em produção. Nada é terceirizado: você conversa comigo, eu desenvolvo, eu entrego.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "GitHub", href: "https://github.com/larissa4p" },
                { label: "LinkedIn", href: "https://linkedin.com/in/larissa4p" },
                { label: "WhatsApp", href: "https://wa.me/5561999157096" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-4 py-2 rounded-xl bg-[#0c1810] border border-[#162b1c] text-[#4d7a60] hover:border-[#22c55e]/40 hover:text-[#22c55e] transition-all"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "5", label: "anos de experiência" },
                { n: "23", label: "projetos entregues" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl bg-[#0c1810] border border-[#162b1c]">
                  <p className="text-3xl font-black text-[#22c55e] mb-1" style={{ fontFamily: "var(--font-syne)" }}>{s.n}</p>
                  <p className="text-xs text-[#4d7a60]" style={{ fontFamily: "var(--font-inter)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
