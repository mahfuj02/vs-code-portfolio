"use client";
// ThemeContext.tsx
// Theme color map for all themes
export const themeColors = {
  light: {
    background: "#fff",
    text: "#222",
    card: "#f3f4f6",
    cardText: "#222",
    tabActive: "#e5e7eb",
    tabInactive: "#fff",
    sidebar: "#fff",
    sidebarText: "#222",
    border: "#e5e7eb",
    button: "#2563eb",
    buttonText: "#fff",
  },
  ayu: {
    background: "#0a0e14",
    text: "#e6b450",
    card: "#1f2430",
    cardText: "#e6b450",
    tabActive: "#1f2430",
    tabInactive: "#0a0e14",
    sidebar: "#1f2430",
    sidebarText: "#e6b450",
    border: "#2d3440",
    button: "#e6b450",
    buttonText: "#0a0e14",
  },
  dracula: {
    background: "#282a36",
    text: "#f8f8f2",
    card: "#44475a",
    cardText: "#f8f8f2",
    tabActive: "#44475a",
    tabInactive: "#282a36",
    sidebar: "#44475a",
    sidebarText: "#f8f8f2",
    border: "#6272a4",
    button: "#bd93f9",
    buttonText: "#282a36",
  },
  nightowl: {
    background: "#011627",
    text: "#d6deeb",
    card: "#1d3b53",
    cardText: "#d6deeb",
    tabActive: "#1d3b53",
    tabInactive: "#011627",
    sidebar: "#1d3b53",
    sidebarText: "#d6deeb",
    border: "#2e3c43",
    button: "#82aaff",
    buttonText: "#011627",
  },
};
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Theme = 'light' | 'ayu' | 'dracula' | 'nightowl';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('ayu');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
