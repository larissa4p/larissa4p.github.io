import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Fronts from "@/components/Fronts";
import WhyMe from "@/components/WhyMe";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Fronts />
        <WhyMe />
        <Comparison />
        <Process />
        <Projects />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
