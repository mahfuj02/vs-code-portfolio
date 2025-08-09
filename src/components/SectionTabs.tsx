"use client";
import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

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

const SectionTabs: React.FC<SectionTabsProps> = ({ active, setActive }) => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  return (
    <nav className="flex gap-2 border-b mb-6" style={{ borderBottom: `1px solid ${colors.border}` }}>
      {sections.map((section) => {
        const isActive = active === section.id;
        const style = isActive
          ? {
              background: `${colors.tabActive}${theme === 'light' ? '' : 'CC'}`,
              color: colors.text,
              fontWeight: 'bold',
              borderBottom: `2px solid ${colors.button}`,
              opacity: 0.95,
            }
          : {
              background: colors.tabInactive,
              color: colors.text,
              opacity: 0.8,
            };
        return (
          <button
            key={section.id}
            onClick={() => setActive(section.id)}
            className="flex items-center gap-1 px-4 py-2 rounded-t text-sm font-mono transition-colors"
            style={style}
          >
            <span>{section.icon}</span>
            <span>{section.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionTabs;
