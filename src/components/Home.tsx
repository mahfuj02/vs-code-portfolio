import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";

const codeSnippet = `const fakeAPI = () =>
  Promise.resolve({ message: "Hello from the server 🚀" });

export default function ApiDemo() {
  const [msg, setMsg] = useState("...waiting");

  const loadMessage = async () => {
    const res = await fakeAPI();
    setMsg(res.message);
  };

  return (
    <div>
      <p>{msg}</p>
      <button onClick={loadMessage}>Fetch</button>
    </div>
  );
}`;

const techs = [
  { name: "React", className: "text-blue-400", style: { top: "10%", left: "5%", opacity: 0.08, fontSize: "2rem" }, animate: "animate-pulse" },
  { name: "JavaScript", className: "text-yellow-400", style: { top: "15%", right: "8%", opacity: 0.06, fontSize: "1.5rem" }, animate: "animate-pulse" },
  { name: "Next.js", className: "text-white", style: { top: "60%", left: "3%", opacity: 0.07, fontSize: "1.8rem" }, animate: "animate-pulse" },
  { name: "TypeScript", className: "text-blue-500", style: { bottom: "20%", right: "5%", opacity: 0.08, fontSize: "1.6rem" }, animate: "animate-pulse" },
  { name: "Node.js", className: "text-green-500", style: { bottom: "15%", left: "8%", opacity: 0.06, fontSize: "1.7rem" }, animate: "animate-pulse" },
  { name: "MongoDB", className: "text-green-400", style: { top: "35%", left: "90%", opacity: 0.07, fontSize: "1.4rem" }, animate: "animate-pulse" },
  { name: "Python", className: "text-yellow-500", style: { bottom: "10%", right: "15%", opacity: 0.08, fontSize: "1.9rem" }, animate: "animate-pulse" },
  { name: "CSS3", className: "text-blue-400", style: { top: "25%", right: "12%", opacity: 0.06, fontSize: "1.5rem" }, animate: "animate-pulse" },
  { name: "HTML5", className: "text-orange-500", style: { bottom: "30%", left: "2%", opacity: 0.07, fontSize: "1.6rem" }, animate: "animate-pulse" },
  { name: "GraphQL", className: "text-pink-500", style: { top: "50%", left: "85%", opacity: 0.08, fontSize: "1.3rem" }, animate: "animate-pulse" },
  { name: "Vue.js", className: "text-green-400", style: { bottom: "40%", right: "20%", opacity: 0.06, fontSize: "1.7rem" }, animate: "animate-pulse" },
  { name: "Docker", className: "text-blue-500", style: { top: "40%", right: "3%", opacity: 0.07, fontSize: "1.4rem" }, animate: "animate-pulse" },
  { name: "Git", className: "text-orange-400", style: { bottom: "25%", left: "12%", opacity: 0.08, fontSize: "1.6rem" }, animate: "animate-pulse" },
  { name: "AWS", className: "text-orange-500", style: { top: "20%", left: "15%", opacity: 0.06, fontSize: "1.5rem" }, animate: "animate-pulse" },
  { name: "Redux", className: "text-purple-500", style: { bottom: "35%", right: "8%", opacity: 0.07, fontSize: "1.4rem" }, animate: "animate-pulse" },
];

const brackets = [
  { symbol: "{", style: { top: "8%", left: "20%", opacity: 0.04, fontSize: "3rem" }, animate: "animate-pulse" },
  { symbol: "}", style: { top: "18%", right: "25%", opacity: 0.05, fontSize: "2.5rem" }, animate: "animate-pulse" },
  { symbol: "[", style: { top: "45%", left: "15%", opacity: 0.04, fontSize: "2.8rem" }, animate: "animate-pulse" },
  { symbol: "]", style: { bottom: "35%", right: "30%", opacity: 0.05, fontSize: "2.6rem" }, animate: "animate-pulse" },
  { symbol: "{", style: { bottom: "20%", left: "25%", opacity: 0.04, fontSize: "3.2rem" }, animate: "animate-pulse" },
  { symbol: "}", style: { top: "65%", right: "15%", opacity: 0.05, fontSize: "2.4rem" }, animate: "animate-pulse" },
  { symbol: "(", style: { top: "30%", left: "70%", opacity: 0.04, fontSize: "2.7rem" }, animate: "animate-pulse" },
  { symbol: ")", style: { bottom: "45%", left: "75%", opacity: 0.05, fontSize: "2.9rem" }, animate: "animate-pulse" },
  { symbol: "<", style: { top: "12%", left: "50%", opacity: 0.04, fontSize: "2.5rem" }, animate: "animate-pulse" },
  { symbol: ">", style: { bottom: "15%", right: "45%", opacity: 0.05, fontSize: "2.6rem" }, animate: "animate-pulse" },
  { symbol: "{", style: { top: "55%", left: "40%", opacity: 0.04, fontSize: "2.3rem" }, animate: "animate-pulse" },
  { symbol: "}", style: { bottom: "50%", right: "55%", opacity: 0.05, fontSize: "2.8rem" }, animate: "animate-pulse" },
];

const Home = () => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;

  return (
    <div 
      className="relative w-full h-full flex p-2 lg:p-8"
      style={{ 
        background: colors.background,
        color: colors.text 
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating Tech Names with gentle shake */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {techs.map((tech, index) => (
            <div
              key={tech.name}
              className={`absolute font-mono font-medium ${tech.className} ${tech.animate}`}
              style={{ 
                ...tech.style, 
                zIndex: 1, 
                pointerEvents: "none",
                animation: `gentle-shake 4s ease-in-out infinite ${index * 0.3}s`
              }}
            >
              {tech.name}
            </div>
          ))}
        </div>

        {/* Floating Brackets and Symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {brackets.map((bracket, index) => (
            <div
              key={`bracket-${index}`}
              className={`absolute font-mono ${bracket.animate}`}
              style={{ 
                ...bracket.style, 
                zIndex: 1, 
                pointerEvents: "none",
                color: colors.sidebarText,
                animation: `gentle-shake 5s ease-in-out infinite ${index * 0.5}s`
              }}
            >
              {bracket.symbol}
            </div>
          ))}
        </div>

        {/* Small animated cubes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, index) => {
            // Use fixed positions based on index to avoid hydration mismatch
            const positions = [
              { top: '15%', left: '25%' },
              { top: '35%', left: '75%' },
              { top: '60%', left: '10%' },
              { top: '80%', left: '60%' },
              { top: '25%', left: '50%' },
              { top: '70%', left: '85%' },
              { top: '45%', left: '30%' },
              { top: '10%', left: '80%' }
            ];
            
            return (
              <div
                key={`cube-${index}`}
                className="absolute w-3 h-3 border"
                style={{
                  top: positions[index]?.top || '20%',
                  left: positions[index]?.left || '30%',
                  opacity: 0.03,
                  transform: 'rotate(45deg)',
                  borderColor: colors.border,
                  animation: `gentle-shake 6s ease-in-out infinite ${index * 0.7}s`
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-2 lg:gap-8">
        {/* Left: Code Editor */}
        <div 
          className="h-150 w-full lg:w-1/2 rounded-xl shadow-2xl p-2 lg:p-6 border flex items-center justify-center lg:mt-8"
          style={{ 
            background: colors.sidebar,
            borderColor: colors.border
          }}
        >
          
          {/* Code Snippet */}
          <div 
            className="rounded-lg p-2 lg:p-4 overflow-x-auto w-full flex items-center justify-center"
            style={{ background: colors.tabActive }}
          >
            <pre className="text-xs lg:text-sm font-mono whitespace-pre" style={{ color: colors.text }}>
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Right: Hero Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-4" style={{ color: colors.text }}>
            Mahfuj Ahmed
          </h1>
          <h2 className="text-base sm:text-xl lg:text-3xl font-semibold mb-3 lg:mb-6" style={{ color: colors.button }}>
            Full Stack Web Developer
          </h2>
          <p className="text-sm lg:text-lg mb-4 lg:mb-8 max-w-lg leading-relaxed" style={{ color: colors.sidebarText }}>
            I build elegant, responsive web applications with modern technologies. 
            Focused on clean code and intuitive user experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 w-full sm:w-auto">
            <a 
              href="/projects" 
              className="px-4 lg:px-8 py-2 lg:py-4 rounded-lg shadow-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group text-center text-sm lg:text-base"
              style={{ 
                background: colors.button,
                color: colors.buttonText 
              }}
            >
              View Projects 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="/contact" 
              className="px-4 lg:px-8 py-2 lg:py-4 border-2 rounded-lg font-semibold transition-all duration-300 hover:opacity-80 text-center text-sm lg:text-base"
              style={{ 
                borderColor: colors.border,
                color: colors.text,
                backgroundColor: 'transparent'
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes gentle-shake {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(1px) translateY(-1px); }
          50% { transform: translateX(-1px) translateY(1px); }
          75% { transform: translateX(1px) translateY(1px); }
        }
      `}</style>
    </div>
  );
};

export default Home;