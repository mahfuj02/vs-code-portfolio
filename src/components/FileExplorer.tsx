"use client";
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const files = [
  { id: "about", label: "About.tsx", icon: "⚛️" },
  { id: "experience", label: "Experience.ts", icon: "💼" },
  { id: "projects", label: "Projects.js", icon: "🚀" },
  { id: "skills", label: "Skills.json", icon: "⚡" },
  { id: "contact", label: "Contact.tsx", icon: "📧" },
];

interface FileExplorerProps {
  openTabs: string[];
  setOpenTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onFileClick?: (fileId: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ openTabs, setOpenTabs, activeTab, setActiveTab, onFileClick }) => {
  // Get theme from context
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  const [folderOpen, setFolderOpen] = useState(true);
  const handleFolderClick = () => {
    setFolderOpen(open => !open);
  };
  const handleFileClick = (id: string) => {
    if (!openTabs.includes(id)) {
      setOpenTabs([...openTabs, id]);
    }
    setActiveTab(id);
    if (typeof onFileClick === "function") onFileClick(id);
  };

  return (
    <div
      className="file-explorer flex flex-col gap-1"
      style={theme === "ayu"
        ? { background: colors.sidebar, color: colors.sidebarText, minHeight: "100%" }
        : theme === "dracula"
        ? { background: colors.sidebar, color: colors.sidebarText, minHeight: "100%" }
        : theme === "nightowl"
        ? { background: colors.sidebar, color: colors.sidebarText, minHeight: "100%" }
        : {}}
    >
  {/* ...existing code... */}
      {/* File list (no folder header) */}
      <div className="file-list flex flex-col gap-1 mt-1">
        {files.map(file => {
          const isActive = activeTab === file.id;
          const style = isActive
            ? {
                background: colors.tabActive,
                color: colors.sidebarText,
                opacity: 0.95,
                fontWeight: 'bold',
              }
            : {
                background: colors.sidebar,
                color: colors.sidebarText,
                opacity: 0.8,
              };
          return (
            <div
              key={file.id}
              className={`file-item flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition-colors text-sm font-mono`}
              style={style}
              onClick={() => handleFileClick(file.id)}
            >
              <span>{file.icon}</span>
              <span>{file.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileExplorer;
