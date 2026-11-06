import AnimateIn from "./AnimateIn";

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-16 md:py-28 border-t border-[#162b1c]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Próximo passo
            </p>
            <h2
              className="font-black text-[#edfaf2] uppercase tracking-tight leading-none mb-6"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem, 6.5vw, 6rem)" }}
            >
              Vamos colocar seu<br />
              <span style={{ color: "transparent", WebkitTextStroke: "2px #22c55e" }}>projeto no ar?</span>
            </h2>
            <p className="text-[#4d7a60] max-w-md mx-auto mb-10" style={{ fontFamily: "var(--font-inter)" }}>
              Me chama e conta o que você precisa. Eu digo, sem enrolação, o que faz sentido pro seu caso.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/5561999157096"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#22c55e] text-[#050a07] font-bold hover:bg-[#4ade80] hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-[#22c55e]/20"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Chamar no WhatsApp →
              </a>
              <a
                href="https://github.com/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#0c1810] border border-[#162b1c] text-[#4d7a60] hover:border-[#22c55e]/40 hover:text-[#22c55e] transition-all"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ver portfólio
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t border-[#162b1c] py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs text-[#2a4030]" style={{ fontFamily: "var(--font-dm-mono)" }}>
            © 2026 Larissa Bessa · Desenvolvimento Web. Brasília, BR.
          </span>
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/larissa4p" },
              { label: "LinkedIn", href: "https://linkedin.com/in/larissa4p" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs text-[#2a4030] hover:text-[#4d7a60] transition-colors" style={{ fontFamily: "var(--font-dm-mono)" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
