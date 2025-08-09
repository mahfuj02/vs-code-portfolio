"use client";


import VSCodeLayout from "../components/VSCodeLayout";
import { useTheme } from "../components/ThemeContext";
import { themeColors } from "../components/ThemeContext";
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
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;

  // Tab close logic
  const closeTab = (id: string) => {
    setOpenTabs(tabs => {
      const newTabs = tabs.filter(tab => tab !== id);
      if (activeTab === id) {
        setActiveTab(newTabs.length ? newTabs[newTabs.length - 1] : "about");
      }
      return newTabs;
    });
  };

  // Tab meta for icons and labels
  const tabMeta = [
    { id: "about", label: "About.tsx", icon: "⚛️" },
    { id: "experience", label: "Experience.ts", icon: "💼" },
    { id: "projects", label: "Projects.js", icon: "🚀" },
    { id: "skills", label: "Skills.json", icon: "⚡" },
    { id: "contact", label: "Contact.tsx", icon: "📧" },
  ];

  return (
    <VSCodeLayout
      sidebar={<FileExplorer openTabs={openTabs} setOpenTabs={setOpenTabs} activeTab={activeTab} setActiveTab={setActiveTab} />}
      showThemePage={showThemePage}
      setShowThemePage={setShowThemePage}
    >
      {/* Tab Bar - top of main section, starts after sidebar */}
      <div className="flex gap-1 border-b mb-0" style={{ borderBottom: `1px solid ${colors.border}` }}>
        {openTabs.map(tabId => {
          const meta = tabMeta.find(t => t.id === tabId);
          const isActive = activeTab === tabId;
          const activeStyle = isActive
            ? {
                background: `${colors.tabActive}${theme === 'light' ? '' : 'CC'}`,
                color: colors.text,
                opacity: 0.95,
                fontWeight: 'bold',
                borderBottom: `2px solid ${colors.button}`,
              }
            : {
                background: colors.tabInactive,
                color: colors.text,
                opacity: 0.8,
              };
          return (
            <div
              key={tabId}
              className={`flex items-center gap-1 px-4 py-2 rounded-t text-sm font-mono transition-colors cursor-pointer relative`}
              style={activeStyle}
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
      {/* Editor Content - only show active tab's content */}
      <div className="flex flex-col gap-8">
        {(() => {
          switch (activeTab) {
            case "about": return <About />;
            case "experience": return <Experience />;
            case "projects": return <Projects />;
            case "skills": return <Skills />;
            case "contact": return <Contact />;
            default: return <About />;
          }
        })()}
      </div>
    </VSCodeLayout>
  );
}
