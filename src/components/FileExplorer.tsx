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
  const [expanded, setExpanded] = useState<string[]>([files[0].id]);

  const handleClick = (id: string) => {
    if (!expanded.includes(id)) {
      setExpanded([...expanded, id]);
    }
    if (!openTabs.includes(id)) {
      setOpenTabs([...openTabs, id]);
    }
    setActiveTab(id);
  };

  const handleDoubleClick = (id: string) => {
    setExpanded(expanded.filter(e => e !== id));
    setOpenTabs(openTabs.filter(tab => tab !== id));
    if (activeTab === id && openTabs.length > 1) {
      const lastTab = openTabs.filter(tab => tab !== id).slice(-1)[0];
      setActiveTab(lastTab);
    }
  };

  return (
    <div className="file-explorer flex flex-col gap-1">
      {files.map(file => (
        <div
          key={file.id}
          className={`file-item flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition-colors text-sm font-mono
            ${activeTab === file.id ? "bg-neutral-700 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
          onClick={() => handleClick(file.id)}
          onDoubleClick={() => handleDoubleClick(file.id)}
        >
          <span>{file.icon}</span>
          <span>{file.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
