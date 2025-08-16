"use client";

import { useState, useEffect } from "react";
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
import Home from "../components/Home";

const tabComponents: Record<string, React.ReactNode> = {
  home: <Home />,
  about: <About />,
  experience: <Experience />,
  projects: <Projects />,
  skills: <Skills />,
  contact: <Contact />,
  theme: <Theme />,
};

const tabMeta = [
  { id: "home", label: "home.tsx", icon: "🏠" },
  { id: "about", label: "About.tsx", icon: "⚛️" },
  { id: "experience", label: "Experience.ts", icon: "💼" },
  { id: "projects", label: "Projects.js", icon: "🚀" },
  { id: "skills", label: "Skills.json", icon: "⚡" },
  { id: "contact", label: "Contact.tsx", icon: "📧" },
];

export default function MainPage() {
  const [showThemePage, setShowThemePage] = useState(false);
  const [openTabs, setOpenTabs] = useState<string[]>(["home"]);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;

  // Check for mobile/tablet screen sizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // For responsive: show all files as non-closeable tabs
  const allTabs = isMobile ? tabMeta.map(tab => tab.id) : openTabs;
  
  // Tab close logic (only for desktop)
  const closeTab = (id: string) => {
    if (isMobile) return; // No closing on mobile
    
    setOpenTabs(tabs => {
      const newTabs = tabs.filter(tab => tab !== id);
      if (activeTab === id) {
        setActiveTab(newTabs.length ? newTabs[newTabs.length - 1] : "about");
      }
      return newTabs;
    });
  };

  return (
    <VSCodeLayout
      sidebar={!isMobile ? <FileExplorer openTabs={openTabs} setOpenTabs={setOpenTabs} activeTab={activeTab} setActiveTab={setActiveTab} /> : null}
      showThemePage={showThemePage}
      setShowThemePage={setShowThemePage}
      isMobile={isMobile}
    >
      {/* Tab Bar - responsive behavior */}
      <div className={`flex gap-1 border-b mb-0 ${isMobile ? 'overflow-x-auto scrollbar-hide' : ''}`} style={{ borderBottom: `1px solid ${colors.border}` }}>
        {allTabs.map(tabId => {
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
              className={`flex items-center gap-1 px-3 py-2 rounded-t text-sm font-mono transition-colors cursor-pointer relative ${isMobile ? 'flex-shrink-0 min-w-max' : ''}`}
              style={activeStyle}
              onClick={() => setActiveTab(tabId)}
            >
              <span>{meta?.icon}</span>
              <span className={isMobile ? 'text-xs' : ''}>{meta?.label}</span>
              {!isMobile && (
                <button
                  className="ml-2 text-xs opacity-60 hover:opacity-100 px-1"
                  onClick={e => { e.stopPropagation(); closeTab(tabId); }}
                  aria-label="Close tab"
                >×</button>
              )}
            </div>
          );
        })}
      </div>
      {/* Editor Content - only show active tab's content */}
      <div className={`flex flex-col ${isMobile ? 'gap-2 p-1' : 'gap-4 p-4'}`}>
        {tabComponents[activeTab] || <About />}
      </div>
    </VSCodeLayout>
  );
}
