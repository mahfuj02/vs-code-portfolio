import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  return (
    <section>
      <h2 className="text-xl font-bold mb-2" style={{ color: colors.text }}>Projects</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="rounded p-4 border transition"
          style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}
        >
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>🎮 Game Hub</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>React.js, TypeScript, React Query, Zustand</div>
          <p className="text-sm mb-2" style={{ color: colors.cardText }}>Game platform using React.js with React Query and Zustand for optimized state management. Responsive UI with reusable architecture.</p>
        </div>
        <div
          className="rounded p-4 border transition"
          style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}
        >
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>🛒 Grocery Bazar</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>Python, Django, React, SQLite</div>
          <p className="text-sm mb-2" style={{ color: colors.cardText }}>Full-stack e-commerce app with React frontend and Django backend. Reusable APIs and optimized database queries.</p>
        </div>
        <div
          className="rounded p-4 border transition"
          style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}
        >
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>🤝 Golden Rule Volunteer</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>HTML, CSS, JavaScript, PHP, MySQL</div>
          <p className="text-sm mb-2" style={{ color: colors.cardText }}>PHP/MySQL backend for event data, user registrations, and notifications. Community-focused technology.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
