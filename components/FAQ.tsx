"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "Você usa Elementor ou page builder?",
    a: "Não. Todo código é escrito do zero — PHP, HTML, CSS e JavaScript puro. Sem dependência de plugin de assinatura, sem limitação de template.",
  },
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "Depende do projeto. Uma landing page simples pode sair em poucos dias. Um sistema com integração WhatsApp leva mais. Combinamos uma data na proposta e eu cumpro.",
  },
  {
    q: "Posso pedir ajustes depois da entrega?",
    a: "Sim. Ajustes pequenos logo após a entrega estão inclusos. Mudanças maiores são orçadas à parte, sempre combinadas antes de qualquer alteração.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Combinamos na conversa. Geralmente uma parte no início e o restante na entrega. Sem burocracia.",
  },
  {
    q: "O site funciona bem no celular?",
    a: "Sim. Todo projeto é responsivo, testado em celular, tablet e desktop antes de ir pro ar.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-28 border-t border-[#162b1c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16">
          <AnimateIn>
            <p className="text-[10px] text-[#22c55e] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#edfaf2] uppercase tracking-tight mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Ainda com dúvidas<span className="text-[#22c55e]">?</span>
            </h2>
            <p className="text-sm text-[#4d7a60]" style={{ fontFamily: "var(--font-inter)" }}>
              Se não achar a resposta aqui, é só chamar no WhatsApp.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#162b1c]">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <span className="text-sm font-semibold text-[#edfaf2]" style={{ fontFamily: "var(--font-inter)" }}>
                      {faq.q}
                    </span>
                    <span className="text-[#22c55e] shrink-0 text-lg transition-transform duration-300" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm text-[#4d7a60] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
