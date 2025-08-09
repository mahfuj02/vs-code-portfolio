import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  return (
    <section style={{ background: colors.background, color: colors.text }} className="rounded-xl p-8 shadow mb-8">
      <h2 className="text-xl font-bold mb-2" style={{ color: colors.text }}>About</h2>
      <div className="flex items-center gap-6 mb-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold" style={{ background: colors.button, color: colors.buttonText }}>MA</div>
        <div>
          <div className="font-semibold text-lg" style={{ color: colors.text }}>Md Mahfuj Ahmed</div>
          <div className="text-sm" style={{ color: colors.cardText }}>Software Developer</div>
          <div className="text-sm" style={{ color: colors.cardText }}>Winnipeg, MB, Canada</div>
        </div>
      </div>
      <p className="mb-2" style={{ color: colors.cardText }}>Software Developer with 3+ years of experience. Strong foundation in C++ and Python, experienced with modern front-end frameworks like React.js. Proven record of optimizing databases and solving 1000+ programming challenges.</p>
      <ul className="text-sm" style={{ color: colors.cardText }}>
        <li>Email: ahmedmahfujsy@gmail.com</li>
        <li>Phone: +1(437)-808-4685</li>
        <li>GitHub: mahfuj02</li>
        <li>LinkedIn: mahfuj02</li>
      </ul>
    </section>
  );
};

export default About;
