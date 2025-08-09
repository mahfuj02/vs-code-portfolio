"use client";
import React from "react";
import { useTheme, Theme as ThemeType } from "./ThemeContext";

const themes = [
  {
    id: "dark",
    name: "GitHub Dark",
    icon: "https://raw.githubusercontent.com/primer/github-vscode-theme/main/icons/dark.svg",
  },
  {
    id: "dracula",
    name: "Dracula",
    icon: "https://draculatheme.com/static/icons/dracula.svg",
  },
  {
    id: "ayu",
    name: "Ayu Dark",
    icon: "https://raw.githubusercontent.com/ayu-theme/vscode-ayu/master/logo.png",
  },
  {
    id: "nord",
    name: "Nord",
    icon: "https://raw.githubusercontent.com/arcticicestudio/nord-vscode/develop/assets/nord-icon.png",
  },
];

const Theme: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-8 text-white text-center">Choose a Color Theme</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
        {themes.map(t => (
          <div
            key={t.id}
            className={`flex flex-col items-center bg-[#1e293b] rounded-xl p-10 shadow-lg border-2 transition-all w-80 h-64 ${theme === t.id ? "border-blue-500" : "border-transparent"}`}
          >
            <div className="w-24 h-24 mb-2 rounded-full flex items-center justify-center bg-[#112240]">
              <span className="text-5xl font-bold text-white flex items-center justify-center w-30 h-30">{t.name.charAt(0)}</span>
            </div>
            <div className="text-xl font-semibold text-white ">{t.name}</div>
            <button
              className={`bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition mt-4 ${theme === t.id ? "ring-2 ring-blue-400" : ""}`}
              onClick={() => setTheme(t.id as ThemeType)}
            >
              Set Color Theme
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Theme;
