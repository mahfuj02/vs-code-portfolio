
import VSCodeLayout from "../components/VSCodeLayout";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <VSCodeLayout>
      <div className="flex flex-col gap-8">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </VSCodeLayout>
  );
}
