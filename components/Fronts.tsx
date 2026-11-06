"use client";
import AnimateIn from "./AnimateIn";

const fronts = [
  "PRESENÇA PROFISSIONAL",
  "GERAÇÃO DE LEADS",
  "ATENDIMENTO 24H",
  "INTEGRAÇÃO DE SISTEMAS",
  "VENDAS ONLINE",
  "CREDIBILIDADE",
];

export default function Fronts() {
  return (
    <section className="py-16 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[10px] tracking-widest uppercase text-[#4d7a60] mb-8" style={{ fontFamily: "var(--font-dm-mono)" }}>
            O que um site bem feito resolve de uma vez
          </p>
        </AnimateIn>
        <div className="flex flex-wrap gap-3">
          {fronts.map((f, i) => (
            <AnimateIn key={f} delay={i * 0.05}>
              <span
                className="px-5 py-3 rounded-full border border-[#162b1c] text-sm font-bold text-[#edfaf2] bg-[#0c1810] uppercase tracking-wider hover:border-[#22c55e]/30 hover:text-[#22c55e] transition-all duration-300 cursor-default"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {f}
              </span>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
