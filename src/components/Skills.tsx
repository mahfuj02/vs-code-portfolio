import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  return (
    <section>
      <h2 className="text-xl font-bold mb-2" style={{ color: colors.text }}>Skills & Achievements</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <div className="rounded p-4" style={{ background: colors.card, color: colors.cardText, borderLeft: `4px solid ${colors.button}` }}>
          <div className="font-semibold mb-2" style={{ color: colors.text }}>Programming Languages</div>
          <div className="flex gap-2 flex-wrap">
            {['C++','JavaScript','TypeScript','Python','PHP'].map(skill => (
              <span key={skill} className="px-2 py-1 rounded text-xs" style={{ background: colors.button, color: colors.buttonText }}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="rounded p-4" style={{ background: colors.card, color: colors.cardText, borderLeft: `4px solid ${colors.button}` }}>
          <div className="font-semibold mb-2" style={{ color: colors.text }}>Frameworks & Libraries</div>
          <div className="flex gap-2 flex-wrap">
            {['React JS','Next JS','Django','Django REST'].map(skill => (
              <span key={skill} className="px-2 py-1 rounded text-xs" style={{ background: colors.button, color: colors.buttonText }}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="rounded p-4" style={{ background: colors.card, color: colors.cardText, borderLeft: `4px solid ${colors.button}` }}>
          <div className="font-semibold mb-2" style={{ color: colors.text }}>Databases</div>
          <div className="flex gap-2 flex-wrap">
            {['MySQL','PostgreSQL','SQLite'].map(skill => (
              <span key={skill} className="px-2 py-1 rounded text-xs" style={{ background: colors.button, color: colors.buttonText }}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="rounded p-4" style={{ background: colors.card, color: colors.cardText, borderLeft: `4px solid ${colors.button}` }}>
          <div className="font-semibold mb-2" style={{ color: colors.text }}>Web Technologies</div>
          <div className="flex gap-2 flex-wrap">
            {['HTML5','CSS3','Tailwind CSS','Chakra UI','Material UI','Redux','Zustand','React Query'].map(skill => (
              <span key={skill} className="px-2 py-1 rounded text-xs" style={{ background: colors.button, color: colors.buttonText }}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="rounded p-4" style={{ background: colors.card, color: colors.cardText, borderLeft: `4px solid ${colors.button}` }}>
          <div className="font-semibold mb-2" style={{ color: colors.text }}>Tools & Methodologies</div>
          <div className="flex gap-2 flex-wrap">
            {['Git','Jira','Bitbucket','Docker','CI/CD','Figma','Trello'].map(skill => (
              <span key={skill} className="px-2 py-1 rounded text-xs" style={{ background: colors.button, color: colors.buttonText }}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="rounded p-4" style={{ background: colors.card, color: colors.cardText, borderLeft: `4px solid ${colors.button}` }}>
          <div className="font-semibold mb-2" style={{ color: colors.text }}>Achievements</div>
          <div className="text-sm" style={{ color: colors.cardText }}>
            <div>🏆 1000+ programming challenges solved</div>
            <div>⭐ Codeforces Rating: 1450 (mahfuj02)</div>
            <div>🥇 Group Champion Sprint-Innovation 2025</div>
            <div>🏆 Champion SPI Intra Programming Contest</div>
            <div>🥈 Runner-Up LU Intra Programming Contest</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
