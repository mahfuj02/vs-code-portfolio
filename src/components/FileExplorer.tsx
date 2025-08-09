"use client";
import React, { useState } from "react";

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
}

const FileExplorer: React.FC<FileExplorerProps> = ({ openTabs, setOpenTabs, activeTab, setActiveTab }) => {
  const [folderOpen, setFolderOpen] = useState(true);

  const handleFolderClick = () => {
    setFolderOpen(open => !open);
  };

  const handleFileClick = (id: string) => {
    if (!openTabs.includes(id)) {
      setOpenTabs([...openTabs, id]);
    }
    setActiveTab(id);
  };

  return (
    <div className="file-explorer flex flex-col gap-1">
      {/* Extra icons above explorer */}
      <div className="flex gap-2 mb-2 px-4">
        <span title="Settings" className="text-lg">⚙️</span>
        <span title="Notifications" className="text-lg">🔔</span>
      </div>
      {/* Folder header */}
      <div
        className="folder-header flex items-center gap-2 px-4 py-2 cursor-pointer select-none text-neutral-300 font-bold"
        onClick={handleFolderClick}
      >
        <span className="folder-icon">{folderOpen ? "📂" : "📁"}</span>
        mahfuj-ahmed-portfolio
        <span className="ml-auto">{folderOpen ? "▼" : "▶"}</span>
      </div>
      {/* File list */}
      {folderOpen && (
        <div className="file-list flex flex-col gap-1 mt-1">
          {files.map(file => (
            <div
              key={file.id}
              className={`file-item flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition-colors text-sm font-mono
                ${activeTab === file.id ? "bg-neutral-700 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
              onClick={() => handleFileClick(file.id)}
            >
              <span>{file.icon}</span>
              <span>{file.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
