"use client";


import VSCodeLayout from "../components/VSCodeLayout";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Theme from "../components/Theme"; // Importing Theme instead of ThemeList
import FileExplorer from "../components/FileExplorer";
import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { themeColors } from "../components/ThemeContext";


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
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  const [openTabs, setOpenTabs] = useState<string[]>(["about"]);
  const [activeTab, setActiveTab] = useState<string>("about");

  const closeTab = (id: string) => {
    setOpenTabs(tabs => tabs.filter(tab => tab !== id));
    if (activeTab === id && openTabs.length > 1) {
      const lastTab = openTabs.filter(tab => tab !== id).slice(-1)[0];
      setActiveTab(lastTab);
    }
  };

  // Track theme selector state in parent
  const [showThemePage, setShowThemePage] = useState(false);

  // Callback to close theme selector when file is clicked
  const handleFileClick = () => {
    setShowThemePage(false);
  };

  // Tab style helper for light theme
  const getTabClass = (tabId: string) => {
    if (theme === "ayu") {
      return activeTab === tabId
        ? "border-b-2 font-bold"
        : "hover:opacity-80";
    }
    if (theme === "light") {
      return activeTab === tabId
        ? "bg-gray-100 border-b-2 border-blue-600 text-neutral-900"
        : "bg-white text-neutral-500 hover:bg-gray-200";
    }
    return activeTab === tabId
      ? "bg-neutral-900 border-b-2 border-blue-600 text-white"
      : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700";
  };

  return (
    <VSCodeLayout
      sidebar={<FileExplorer openTabs={openTabs} setOpenTabs={setOpenTabs} activeTab={activeTab} setActiveTab={setActiveTab} onFileClick={handleFileClick} />}
      showThemePage={showThemePage}
      setShowThemePage={setShowThemePage}
    >
      {/* Tab Bar */}
      <div
        className="flex gap-1 border-b mb-6"
        style={theme === "ayu" ? { background: colors.background, borderBottom: `1px solid ${colors.border}` } : {}}
      >
        {openTabs.map(tabId => {
          const meta = tabMeta.find(t => t.id === tabId);
          let style = {};
          if (theme === "ayu") {
            style = activeTab === tabId
              ? { background: colors.tabActive, color: colors.text, borderBottom: `2px solid ${colors.button}` }
              : { background: colors.background, color: colors.text };
          }
          return (
            <div
              key={tabId}
              className={`flex items-center gap-1 px-4 py-2 rounded-t text-sm font-mono transition-colors cursor-pointer relative ${getTabClass(tabId)}`}
              style={style}
              onClick={() => setActiveTab(tabId)}
            >
              <span>{meta?.icon}</span>
              <span>{meta?.label}</span>
              <button
                className="ml-2 text-xs opacity-60 hover:opacity-100 px-1"
                onClick={(e) => { e.stopPropagation(); closeTab(tabId); }}
                aria-label="Close tab"
              >{'×'}</button>
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
