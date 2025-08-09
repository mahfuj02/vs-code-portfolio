"use client";


import VSCodeLayout from "../components/VSCodeLayout";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Theme from "../components/Theme";
import FileExplorer from "../components/FileExplorer";
import { useState } from "react";


const tabComponents: Record<string, React.ReactNode> = {
  about: <About />,
  experience: <Experience />,
  projects: <Projects />,
  skills: <Skills />,
  contact: <Contact />,
  theme: <Theme />, // Replacing ThemeList with Theme
};

const tabMeta = [
  { id: "about", label: "About.tsx", icon: "⚛️" },
  { id: "experience", label: "Experience.ts", icon: "💼" },
  { id: "projects", label: "Projects.js", icon: "🚀" },
  { id: "skills", label: "Skills.json", icon: "⚡" },
  { id: "contact", label: "Contact.tsx", icon: "📧" },
  { id: "theme", label: "Theme.tsx", icon: "⚙️" }, // Keeping the theme entry in tabMeta
];

export default function Home() {
  const [showThemePage, setShowThemePage] = useState(false);
  const [openTabs, setOpenTabs] = useState<string[]>(["about"]);
  const [activeTab, setActiveTab] = useState<string>("about");

  // Map tab id to component
  const tabComponents: Record<string, JSX.Element> = {
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  };

  return (
    <VSCodeLayout
      sidebar={<FileExplorer openTabs={openTabs} setOpenTabs={setOpenTabs} activeTab={activeTab} setActiveTab={setActiveTab} />}
      showThemePage={showThemePage}
      setShowThemePage={setShowThemePage}
      openTabs={openTabs}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {openTabs.map(tabId => tabComponents[tabId])}
    </VSCodeLayout>
  );
}
