

import VSCodeLayout from "../components/VSCodeLayout";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import SectionTabs from "../components/SectionTabs";
import { useState } from "react";


export default function Home() {
  const [active, setActive] = useState("about");

  return (
    <VSCodeLayout>
      <SectionTabs active={active} setActive={setActive} />
      <div className="flex flex-col gap-8">
        {active === "about" && <About />}
        {active === "experience" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "skills" && <Skills />}
        {active === "contact" && <Contact />}
      </div>
    </VSCodeLayout>
  );
}
