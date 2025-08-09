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
  // activeSection: 'files', 'github', 'blog', 'settings'
  const [activeSection, setActiveSection] = useState<string>("files");
  // Track which file is active (about, contact, etc.)
  const [activeFile, setActiveFile] = useState<string>("about");

  // Listen for sidebar file click from parent (FileExplorer)
  const handleSidebarFileClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setActiveSection("files");
  };
  const { theme, setTheme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;

  // Activity bar actions
  // Remove duplicate handleSettingsClick definition
  const handleExplorerClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setShowSidebar(true);
    setActiveSection("files");
  };
  const handleGithubClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setShowSidebar(false);
    setActiveSection("github");
  };
  const handleBlogClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(false);
    setShowSidebar(false);
    setActiveSection("blog");
  };
  const handleSettingsClick = () => {
    if (setShowThemePageProp) setShowThemePageProp(true);
    setShowSidebar(false);
    setActiveSection("settings");
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
          <button title="GitHub" className="text-lg focus:outline-none" onClick={handleGithubClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.38 9.38 0 012.5-.34c.85.01 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="currentColor"/>
            </svg>
          </button>
          <button title="Blog" className="text-lg focus:outline-none" onClick={handleBlogClick}>📝</button>
          <button title="Settings" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg focus:outline-none" onClick={handleSettingsClick}>⚙️</button>
        </nav>
        {/* Sidebar (File Explorer) */}
        {showSidebar && (
          <aside className="w-64 border-r flex flex-col py-4 gap-6" style={{ background: colors.sidebar, borderRight: `1px solid ${colors.border}`, color: colors.sidebarText }}>
            {React.cloneElement(sidebar as React.ReactElement, {
              onFileClick: (fileId: string) => {
                setActiveSection("files");
                setActiveFile(fileId);
                if (setShowThemePageProp) setShowThemePageProp(false);
              },
              activeFile,
            })}
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
          ) : activeSection === "files" ? (
            (() => {
              const arr = React.Children.toArray(children);
              switch (activeFile) {
                case "about": return arr[0];
                case "experience": return arr[1];
                case "projects": return arr[2];
                case "skills": return arr[3];
                case "contact": return arr[4];
                default: return arr[0];
              }
            })()
          ) : null}
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
        <button title="Settings" className="absolute bottom-1 right-4 text-lg focus:outline-none" onClick={handleSettingsClick}>⚙️</button>
      </footer>
    </div>
    );
  }
  export default VSCodeLayout;
