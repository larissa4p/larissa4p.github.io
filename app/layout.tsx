import type { Metadata } from "next";
import { Syne, Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Larissa Bessa — Desenvolvimento Web",
  description: "WordPress, landing pages e automações WhatsApp. Código limpo, sem page builder, sem enrolação.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${inter.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
