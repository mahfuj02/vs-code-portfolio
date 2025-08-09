"use client";
import React from "react";
import { useTheme, Theme } from "./ThemeContext";

const themes = [
  {
    id: "dark",
    name: "GitHub Dark",
    desc: "GitHub",
    icon: "https://raw.githubusercontent.com/primer/github-vscode-theme/main/icons/dark.svg",
    color: "#24292e",
  },
  {
    id: "dracula",
    name: "Dracula",
    desc: "Dracula Theme",
    icon: "https://draculatheme.com/static/icons/dracula.svg",
    color: "#282a36",
  },
  {
    id: "ayu",
    name: "Ayu Dark",
    desc: "teabyii",
    icon: "https://raw.githubusercontent.com/ayu-theme/vscode-ayu/master/logo.png",
    color: "#0a0e14",
  },
  {
    id: "nord",
    name: "Nord",
    desc: "arcticicestudio",
    icon: "https://raw.githubusercontent.com/arcticicestudio/nord-vscode/develop/assets/nord-icon.png",
    color: "#2e3440",
  },
  {
    id: "nightowl",
    name: "Night Owl",
    desc: "sarah.drasner",
    icon: "https://raw.githubusercontent.com/sdras/night-owl-vscode-theme/master/images/night-owl-logo.png",
    color: "#011627",
  },
];

const ThemeList: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 text-white">Choose a Color Theme</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {themes.map(t => (
          <div
            key={t.id}
            className={`flex flex-col items-center bg-[#112240] rounded-lg p-6 shadow-lg border-2 transition-all
              ${theme === t.id ? "border-blue-500" : "border-transparent"}`}
          >
            <div className="w-30 h-30 mb-4 rounded-full flex items-center justify-center bg-[#1e293b] overflow-hidden">
              <img src={t.icon} alt={t.name} className="w-16 h-16 object-contain" />
            </div>
            <div className="text-lg font-mono text-white mb-1">{t.name}</div>
            <div className="text-xs text-blue-300 mb-2">{t.desc}</div>
            <button
              className={`bg-blue-600 text-white px-4 py-2 rounded mt-2 font-semibold hover:bg-blue-700 transition ${theme === t.id ? "ring-2 ring-blue-400" : ""}`}
              onClick={() => setTheme(t.id as Theme)}
            >
              Set Color Theme
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeList;
