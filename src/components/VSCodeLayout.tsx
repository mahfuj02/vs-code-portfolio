"use client";
import React, { ReactNode } from "react";
import { useTheme } from "./ThemeContext";
import ThemeModal from "./ThemeModal";

interface VSCodeLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

import { useState } from "react";

const VSCodeLayout: React.FC<VSCodeLayoutProps> = ({ children, sidebar }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [themeModal, setThemeModal] = useState(false);
  const { theme, setTheme } = useTheme();

  // Activity bar actions
  const handleExplorerClick = () => setShowSidebar(s => !s);
  const handleSearchClick = () => alert("🔍 Search: Try About.tsx, Experience.ts, Projects.js, Skills.json, Contact.tsx");
  const handleSourceControlClick = () => alert("🌿 Source Control: Connected to GitHub: mahfuj02\nBranch: main\nStatus: All changes committed");
  const handleThemeClick = () => setThemeModal(true);

  return (
    <div className={`min-h-screen flex flex-col font-mono ${theme === "dark" ? "bg-neutral-900 text-neutral-100" : theme === "light" ? "bg-white text-neutral-900" : theme === "gray" ? "bg-gray-800 text-gray-100" : "bg-[#1e1e1e] text-[#d4d4d4]"}`}>
      {/* Title Bar */}
      <div className={`${theme === "vscode" ? "bg-[#3c3c3c] border-b-[#2d2d30]" : "bg-neutral-800 border-b-neutral-700"} flex items-center justify-between h-10 px-4 border-b`}>
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>
        <div className="text-xs text-neutral-300">mahfuj-ahmed-portfolio - Visual Studio Code</div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <nav className={`${theme === "vscode" ? "bg-[#333333] border-r-[#2d2d30]" : "bg-neutral-800 border-r-neutral-700"} w-14 border-r flex flex-col items-center py-4 gap-4 relative`}>
          <button title="Explorer" className="text-lg focus:outline-none" onClick={handleExplorerClick}>📁</button>
          <button title="Search" className="text-lg focus:outline-none" onClick={handleSearchClick}>🔍</button>
          <button title="Source Control" className="text-lg focus:outline-none" onClick={handleSourceControlClick}>🌿</button>
          <span title="Debug" className="text-lg">🐛</span>
          <span title="Extensions" className="text-lg">⚡</span>
          {/* Theme icon at bottom */}
          <button
            title="Theme"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg focus:outline-none"
            onClick={handleThemeClick}
          >
            🎨
          </button>
          {themeModal && <ThemeModal onClose={() => setThemeModal(false)} />}
        </nav>
        {/* Sidebar (File Explorer) */}
        {showSidebar && (
          <aside className={`${theme === "vscode" ? "bg-[#252526] border-r-[#2d2d30]" : "bg-neutral-800 border-r-neutral-700"} w-64 border-r flex flex-col py-4 gap-6`}>
            {sidebar}
          </aside>
        )}
        {/* Editor Area */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
      {/* Status Bar */}
      <footer className={`${theme === "vscode" ? "bg-[#007acc]" : "bg-blue-600"} h-6 text-white flex items-center justify-between px-4 text-xs`}>
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
};

export default VSCodeLayout;
