import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  return (
    <section>
      <h2 className="text-xl font-bold mb-2" style={{ color: colors.text }}>Contact</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded p-4 border" style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}>
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>📧 Email</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>ahmedmahfujsy@gmail.com</div>
          <div className="text-xs" style={{ color: colors.cardText }}>Feel free to reach out for opportunities</div>
        </div>
        <div className="rounded p-4 border" style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}>
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>📞 Phone</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>+1(437)-808-4685</div>
          <div className="text-xs" style={{ color: colors.cardText }}>Available during business hours</div>
        </div>
        <div className="rounded p-4 border" style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}>
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>📍 Location</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>Winnipeg, MB, Canada</div>
          <div className="text-xs" style={{ color: colors.cardText }}>Open to remote work</div>
        </div>
        <div className="rounded p-4 border" style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}>
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>💼 LinkedIn</div>
          <div className="text-sm mb-2" style={{ color: colors.button }}>{"linkedin.com/in/mahfuj02"}</div>
          <div className="text-xs" style={{ color: colors.cardText }}>Professional networking</div>
        </div>
        <div className="rounded p-4 border" style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}>
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>🔗 GitHub</div>
          <div className="text-sm mb-2" style={{ color: colors.button }}>{"github.com/mahfuj02"}</div>
          <div className="text-xs" style={{ color: colors.cardText }}>Check out my projects</div>
        </div>
        <div className="rounded p-4 border" style={{ background: colors.card, color: colors.cardText, border: `1px solid ${colors.border}` }}>
          <div className="font-semibold text-lg mb-1" style={{ color: colors.text }}>🎓 Education</div>
          <div className="text-sm mb-2" style={{ color: colors.cardText }}>Red River College</div>
          <div className="text-xs" style={{ color: colors.cardText }}>Full Stack Web Development (2023-2025)</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
