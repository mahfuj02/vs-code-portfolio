"use client";
import React, { ReactNode, useState } from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";
import Theme from "./Theme";
import BlogSection from "./BlogSection";
import GithubReadme from "./GithubReadme";

interface VSCodeLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  showThemePage?: boolean;
  setShowThemePage?: (show: boolean) => void;
}




const VSCodeLayout: React.FC<VSCodeLayoutProps> = ({ children, sidebar, showThemePage: showThemePageProp, setShowThemePage: setShowThemePageProp }) => {
  // Theme selector state is now controlled by parent
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("files");
  const { theme, setTheme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;

  // Activity bar actions
  const handleSettingsClick = () => setShowThemePageProp && setShowThemePageProp(true);
  const handleExplorerClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setShowSidebar((prev) => !prev);
    setActiveSection("files");
  };
  const handleGithubClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setActiveSection("github");
  };
  const handleBlogClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setActiveSection("blog");
  };

  return (
    <div className="min-h-screen flex flex-col font-mono" style={{ background: colors.background, color: colors.text }}>
      {/* Title Bar */}
      <div className="flex items-center justify-between h-10 px-4 border-b" style={{ background: colors.sidebar, borderBottom: `1px solid ${colors.border}`, color: colors.sidebarText }}>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>
        <div className="text-xs" style={{ color: colors.sidebarText }}>mahfuj-ahmed-portfolio - Visual Studio Code</div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <nav className="w-14 border-r flex flex-col items-center py-4 gap-4 relative" style={{ background: colors.sidebar, borderRight: `1px solid ${colors.border}`, color: colors.sidebarText }}>
          <button title="Files" className="text-lg focus:outline-none" onClick={handleExplorerClick}>📁</button>
          <button title="GitHub" className="text-lg focus:outline-none" onClick={handleGithubClick}>🐙</button>
          <button title="Blog" className="text-lg focus:outline-none" onClick={handleBlogClick}>📝</button>
          <button title="Settings" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg focus:outline-none" onClick={handleSettingsClick}>⚙️</button>
        </nav>
        {/* Sidebar (File Explorer) */}
        {showSidebar && (
          <aside className="w-64 border-r flex flex-col py-4 gap-6" style={{ background: colors.sidebar, borderRight: `1px solid ${colors.border}`, color: colors.sidebarText }}>
            {sidebar}
          </aside>
        )}
        {/* Editor Area */}
        <main className="flex-1 p-6 overflow-y-auto" style={{ background: colors.background, color: colors.text }}>
          {showThemePageProp ? (
            <Theme />
          ) : activeSection === "github" ? (
            <GithubReadme />
          ) : activeSection === "blog" ? (
            <BlogSection />
          ) : (
            children
          )}
        </main>
      </div>
      {/* Status Bar */}
      <footer className="h-6 flex items-center justify-between px-4 text-xs" style={{ background: colors.button, color: colors.buttonText }}>
        <div className="flex gap-4">
          <span>⚛️ React TSX</span>
          <span>🌿 main</span>
          <span>✅ No errors</span>
        </div>
        <div className="flex gap-4">
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
          <span>Mahfuj Ahmed</span>
        </div>
      </footer>
    </div>
    );
  }
  export default VSCodeLayout;
