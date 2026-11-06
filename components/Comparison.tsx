"use client";
import AnimateIn from "./AnimateIn";

const left = [
  "Site feito em construtor com limitações",
  "Preso a template que não é seu",
  "WhatsApp bombando sem filtro",
  "Leads perdidos sem automação",
  "Dependência de agência para qualquer mudança",
];
const right = [
  "Código limpo, sem dependência de plugin",
  "Design do zero, 100% seu",
  "Chatbot filtrando e qualificando leads",
  "Automação integrada ao seu CRM",
  "Você tem acesso e controle total",
];

export default function Comparison() {
  return (
    <section className="py-16 md:py-28 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Na prática
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#edfaf2] uppercase tracking-tight mb-10 md:mb-16" style={{ fontFamily: "var(--font-syne)" }}>
            O que muda quando você<br />trabalha comigo<span className="text-[#22c55e]">.</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left */}
          <div className="rounded-2xl bg-[#0c0e0d] border border-[#162b1c] p-7">
            <p className="text-xs text-[#2a3f30] uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-dm-mono)" }}>Sem sistema</p>
            <ul className="flex flex-col gap-4">
              {left.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#2a4030]" style={{ fontFamily: "var(--font-inter)" }}>
                  <span className="text-red-800 mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-[#061a0d] border border-[#1a3824] p-7">
            <p className="text-xs text-[#22c55e] uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-dm-mono)" }}>Com Larissa Bessa</p>
            <ul className="flex flex-col gap-4">
              {right.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#8ab89a]" style={{ fontFamily: "var(--font-inter)" }}>
                  <span className="text-[#22c55e] mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
