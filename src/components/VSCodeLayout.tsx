"use client";
import React, { ReactNode } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface VSCodeLayoutProps {
  children: ReactNode;
}

const VSCodeLayout: React.FC<VSCodeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-neutral-100 font-mono">
      {/* Title Bar */}
      <div className="flex items-center justify-between h-10 px-4 bg-neutral-800 border-b border-neutral-700">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>
        <div className="text-xs text-neutral-300">mahfuj-ahmed-portfolio - Visual Studio Code</div>
        <ThemeSwitcher />
      </div>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-16 bg-neutral-800 border-r border-neutral-700 flex flex-col items-center py-4 gap-6">
          <span title="Explorer" className="text-lg">📁</span>
          <span title="Source Control" className="text-lg">🌿</span>
          <span title="Debug" className="text-lg">🐛</span>
          <span title="Extensions" className="text-lg">⚡</span>
        </aside>
        {/* Editor Area */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
      {/* Status Bar */}
      <footer className="h-6 bg-blue-600 text-white flex items-center justify-between px-4 text-xs">
        <div className="flex gap-4">
          <span>⚛️ React TSX</span>
          <span>🌿 main</span>
          <span>✅ No errors</span>
        </div>
        <div className="flex gap-4">
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
          <span>Mahfuj Ahmed</span>
        </div>
      </footer>
    </div>
  );
};

export default VSCodeLayout;
