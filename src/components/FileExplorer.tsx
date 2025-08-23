"use client";
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";
import { useRouter, usePathname } from "next/navigation";

const files = [
  { id: "home", label: "home.tsx", icon: "🏠", path: "/" },
  { id: "about", label: "About.tsx", icon: "⚛️", path: "/about" },
  { id: "experience", label: "Experience.ts", icon: "💼", path: "/experience" },
  { id: "projects", label: "Projects.js", icon: "🚀", path: "/projects" },
  { id: "skills", label: "Skills.json", icon: "⚡", path: "/skills" },
  { id: "contact", label: "Contact.tsx", icon: "📧", path: "/contact" },
];

interface FileExplorerProps {
  openTabs?: string[];
  setOpenTabs?: (tabs: string[]) => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  onFileClick?: (fileId: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ openTabs, setOpenTabs, activeTab, setActiveTab, onFileClick }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  const [folderOpen, setFolderOpen] = useState(true);
  
  const handleFolderClick = () => {
    setFolderOpen(open => !open);
  };
  
  const handleFileClick = (file: typeof files[0]) => {
    // Navigate to the file's route
    router.push(file.path);
    
    // Update tabs if tab functions are provided (for backward compatibility)
    if (openTabs && setOpenTabs && !openTabs.includes(file.id)) {
      setOpenTabs([...openTabs, file.id]);
    }
    if (setActiveTab) {
      setActiveTab(file.id);
    }
    if (typeof onFileClick === "function") onFileClick(file.id);
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
          const isActive = pathname === file.path;
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
              onClick={() => handleFileClick(file)}
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
