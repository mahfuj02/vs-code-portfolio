"use client";
import React from "react";
import { useTheme, Theme as ThemeType } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const themes = [
  {
    id: "light",
    name: "Light",
    icon: "",
  },
  {
    id: "ayu",
    name: "Ayu Dark",
    icon: "",
  },
  {
    id: "dracula",
    name: "Dracula",
    icon: "",
  },
  {
    id: "nightowl",
    name: "Night Owl",
    icon: "",
  },
];

const Theme: React.FC = () => {
  const { theme, setTheme } = useTheme();
  // themeColors is already imported from ThemeContext
  return (
    <section style={{ background: themeColors[theme].background }} className="py-8">
      <h2
        className="text-2xl font-bold mb-8 text-center"
        style={{ color: themeColors[theme].text }}
      >
        Choose a Color Theme
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
        {themes.map(t => {
          const themeId = t.id as keyof typeof themeColors;
          const colors = themeColors[themeId] || themeColors.light;
          return (
            <div
              key={t.id}
              className="flex flex-col items-center rounded-xl p-10 shadow-lg border-2 transition-all w-100 h-80"
              style={{
                background: colors.card,
                color: colors.cardText,
                border: theme === t.id ? `2px solid ${colors.button}` : `2px solid transparent`,
              }}
            >
              <div
                className="w-30 h-30 mb-2 rounded-full flex items-center justify-center"
                style={{
                  background: colors.background,
                  border: `2px solid ${colors.border}`,
                }}
              >
                <span
                  className="text-5xl font-bold flex items-center justify-center w-full h-full"
                  style={{ color: colors.button }}
                >
                  {t.name.charAt(0)}
                </span>
              </div>
              <div
                className="text-xl font-semibold"
                style={{ color: colors.text }}
              >
                {t.name}
              </div>
              <button
                style={{
                  background: colors.button,
                  color: colors.buttonText,
                  boxShadow: theme === t.id ? `0 0 0 4px ${colors.button}55` : undefined,
                }}
                className={`px-6 py-3 rounded font-semibold transition mt-4 ${theme === t.id ? "ring-2" : ""}`}
                onClick={() => setTheme(t.id as ThemeType)}
              >
                Set Color Theme
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Theme;
