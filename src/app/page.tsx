"use client";


import VSCodeLayout from "../components/VSCodeLayout";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import FileExplorer from "../components/FileExplorer";
import { useState } from "react";


const tabComponents: Record<string, React.ReactNode> = {
  about: <About />,
  experience: <Experience />,
  projects: <Projects />,
  skills: <Skills />,
  contact: <Contact />,
};

const tabMeta = [
  { id: "about", label: "About.tsx", icon: "⚛️" },
  { id: "experience", label: "Experience.ts", icon: "💼" },
  { id: "projects", label: "Projects.js", icon: "🚀" },
  { id: "skills", label: "Skills.json", icon: "⚡" },
  { id: "contact", label: "Contact.tsx", icon: "📧" },
];

export default function Home() {
  const [openTabs, setOpenTabs] = useState<string[]>(["about"]);
  const [activeTab, setActiveTab] = useState<string>("about");

  const closeTab = (id: string) => {
    setOpenTabs(tabs => tabs.filter(tab => tab !== id));
    if (activeTab === id && openTabs.length > 1) {
      const lastTab = openTabs.filter(tab => tab !== id).slice(-1)[0];
      setActiveTab(lastTab);
    }
  };

  return (
    <VSCodeLayout
      sidebar={<FileExplorer openTabs={openTabs} setOpenTabs={setOpenTabs} activeTab={activeTab} setActiveTab={setActiveTab} />}
    >
      {/* Tab Bar */}
      <div className="flex gap-1 border-b border-neutral-700 mb-6">
        {openTabs.map(tabId => {
          const meta = tabMeta.find(t => t.id === tabId);
          return (
            <div
              key={tabId}
              className={`flex items-center gap-1 px-4 py-2 rounded-t text-sm font-mono transition-colors cursor-pointer relative
                ${activeTab === tabId ? "bg-neutral-900 border-b-2 border-blue-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
              onClick={() => setActiveTab(tabId)}
            >
              <span>{meta?.icon}</span>
              <span>{meta?.label}</span>
              <button
                className="ml-2 text-xs opacity-60 hover:opacity-100 px-1"
                onClick={e => { e.stopPropagation(); closeTab(tabId); }}
                aria-label="Close tab"
              >×</button>
            </div>
          );
        })}
      </div>
      {/* Editor Content */}
      <div className="flex flex-col gap-8">
        {tabComponents[activeTab]}
      </div>
    </VSCodeLayout>
  );
}
