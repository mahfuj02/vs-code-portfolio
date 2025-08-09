"use client";
import React from "react";

const sections = [
  { id: "about", label: "About", icon: "⚛️" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "contact", label: "Contact", icon: "📧" },
];

interface SectionTabsProps {
  active: string;
  setActive: (id: string) => void;
}

const SectionTabs: React.FC<SectionTabsProps> = ({ active, setActive }) => (
  <nav className="flex gap-2 border-b border-neutral-700 mb-6">
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => setActive(section.id)}
        className={`flex items-center gap-1 px-4 py-2 rounded-t text-sm font-mono transition-colors
          ${active === section.id ? "bg-neutral-900 border-b-2 border-blue-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
      >
        <span>{section.icon}</span>
        <span>{section.label}</span>
      </button>
    ))}
  </nav>
);

export default SectionTabs;
