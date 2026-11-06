# larissa-bessa.dev

Site de apresentação de serviços freelance — WordPress, landing pages e automações WhatsApp. Construído do zero, sem template, sem page builder.

**[larissabessa.dev](https://larissabessa.dev)** · [larissa4p](https://github.com/larissa4p)

---

## Stack

| Tecnologia | Uso |
|---|---|
| Next.js 16 (App Router) | Framework principal, SSR/SSG |
| TypeScript | Tipagem estrita em todos os componentes |
| Tailwind CSS v4 | Estilização utility-first |
| Framer Motion | Animações de entrada e interações |
| next/font | Syne + Inter + DM Mono — zero layout shift |

## Destaques técnicos

- **Animações com `whileInView`** — cada seção entra com fade + slide ao scrollar, usando `IntersectionObserver` via Framer Motion para não animar fora da viewport
- **FAQ com `AnimatePresence`** — accordion com animação de altura suave no open/close
- **Nav adaptativa** — blur com `backdrop-filter` ativado apenas após scroll, sem flicker
- **Mobile-first** — paddings e fontes com `clamp()` e breakpoints responsivos em toda a UI
- **Tokens CSS** — paleta definida em custom properties no `globals.css`, consistência garantida

## Estrutura

```
app/
├── layout.tsx       # Fontes via next/font, metadata OpenGraph, lang pt-BR
├── page.tsx         # Composição das seções em ordem
└── globals.css      # Tokens de cor, reset, animação blink

components/
├── AnimateIn.tsx    # Wrapper reutilizável: fade+slide whileInView
├── Nav.tsx          # Sticky nav com blur-on-scroll, responsivo
├── Hero.tsx         # Headline animado, CTAs, stat pills
├── Fronts.tsx       # Badges — frentes que o serviço resolve
├── WhyMe.tsx        # 4 diferenciais com stagger animation
├── Comparison.tsx   # Comparativo antes/depois em 2 colunas
├── Process.tsx      # Timeline de 4 passos com linha conectora
├── Projects.tsx     # 3 projetos destaque com cards
├── About.tsx        # Bio + grid de stats
├── FAQ.tsx          # Accordion com AnimatePresence
└── Footer.tsx       # CTA final com WhatsApp + rodapé
```

## Rodando local

```bash
npm install
npm run dev
# abre em http://localhost:3000
```

## Deploy

Vercel — deploy automático via push no `master`.

---

Desenvolvido por [Larissa Bessa](https://github.com/larissa4p) · Brasília, BR
