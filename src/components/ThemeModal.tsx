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

interface ThemeModalProps {
  onClose: () => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({ onClose }) => {
  const { setTheme } = useTheme();

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-[#0a192f] rounded-lg p-8 w-full max-w-5xl mx-auto shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Choose a Color Theme</h2>
          <button className="text-white text-2xl px-2" onClick={onClose}>×</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {themes.map(theme => (
            <div key={theme.id} className="flex flex-col items-center bg-[#112240] rounded-lg p-6 shadow-lg">
              <img src={theme.icon} alt={theme.name} className="w-20 h-20 mb-4 rounded-full bg-[#1e293b]" />
              <div className="text-lg font-mono text-white mb-1">{theme.name}</div>
              <div className="text-xs text-blue-300 mb-2">{theme.desc}</div>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2 font-semibold hover:bg-blue-700 transition"
                onClick={() => { setTheme(theme.id as Theme); onClose(); }}
              >
                Set Color Theme
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
