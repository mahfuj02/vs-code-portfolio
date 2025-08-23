import React from "react";
import { useTheme } from "./ThemeContext";
import { themeColors } from "./ThemeContext";
import Image from "next/image";

const About: React.FC = () => {
  const { theme } = useTheme();
  const colors = themeColors[theme] || themeColors.light;
  
  return (
    <div 
      className="w-full h-full p-4 lg:p-8 overflow-y-auto"
      style={{ 
        background: colors.background,
        color: colors.text 
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: colors.text }}>
            About Me
          </h1>
          <div className="w-24 h-1 mx-auto rounded" style={{ background: colors.button }}></div>
        </div>

        {/* Profile Section */}
        <div 
          className="rounded-xl p-6 lg:p-8 shadow-lg border"
          style={{ 
            background: colors.sidebar,
            borderColor: colors.border
          }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div 
                className="relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center overflow-hidden rounded-full border-2"
                style={{ borderColor: colors.button }}
              >
                {/* Animated Background Elements - Inside Border */}
                <div className="absolute inset-2 pointer-events-none">
                  {/* ZZZ Sleep bubbles */}
                  <div 
                    className="absolute text-xs font-bold opacity-20"
                    style={{ 
                      top: '10%', 
                      right: '15%',
                      color: colors.text,
                      animation: 'float-up 3s ease-in-out infinite'
                    }}
                  >
                    Z
                  </div>
                  <div 
                    className="absolute text-sm font-bold opacity-15"
                    style={{ 
                      top: '20%', 
                      right: '10%',
                      color: colors.text,
                      animation: 'float-up 3s ease-in-out infinite 0.5s'
                    }}
                  >
                    Z
                  </div>
                  <div 
                    className="absolute text-lg font-bold opacity-10"
                    style={{ 
                      top: '30%', 
                      right: '5%',
                      color: colors.text,
                      animation: 'float-up 3s ease-in-out infinite 1s'
                    }}
                  >
                    Z
                  </div>
                  
                  {/* Thought bubble */}
                  <div 
                    className="absolute w-2 h-2 rounded-full opacity-15"
                    style={{ 
                      top: '15%', 
                      left: '10%',
                      background: colors.button,
                      animation: 'bubble-pop 4s ease-in-out infinite'
                    }}
                  ></div>
                  <div 
                    className="absolute w-3 h-3 rounded-full opacity-12"
                    style={{ 
                      top: '10%', 
                      left: '5%',
                      background: colors.button,
                      animation: 'bubble-pop 4s ease-in-out infinite 0.5s'
                    }}
                  ></div>
                  
                  {/* Coding symbols */}
                  <div 
                    className="absolute text-xs font-mono opacity-20"
                    style={{ 
                      bottom: '15%', 
                      left: '15%',
                      color: colors.button,
                      animation: 'code-blink 2s ease-in-out infinite'
                    }}
                  >
                    {'</>'}
                  </div>
                  <div 
                    className="absolute text-xs font-mono opacity-15"
                    style={{ 
                      bottom: '25%', 
                      right: '20%',
                      color: colors.button,
                      animation: 'code-blink 2s ease-in-out infinite 1s'
                    }}
                  >
                    {}
                  </div>
                  
                  {/* Lightbulb idea */}
                  <div 
                    className="absolute text-sm opacity-20"
                    style={{ 
                      top: '35%', 
                      left: '15%',
                      animation: 'idea-flash 5s ease-in-out infinite'
                    }}
                  >
                    💡
                  </div>
                </div>
                
                {/* Profile Image - Static */}
                <div 
                  className="relative w-28 h-28 lg:w-36 lg:h-36 z-10"
                >
                  <Image
                    src="/about/profile-2.png"
                    alt="Mahfuj Ahmed"
                    fill
                    className="rounded-full object-cover  shadow-lg"
                    style={{ borderColor: colors.button }}
                  />
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: colors.text }}>
                Md Mahfuj Ahmed
              </h2>
              <h3 className="text-lg lg:text-xl font-semibold mb-3" style={{ color: colors.button }}>
                Full Stack Web Developer
              </h3>
              <p className="text-base lg:text-lg mb-4 leading-relaxed" style={{ color: colors.sidebarText }}>
                Passionate software developer with 3+ years of experience building modern web applications. 
                I specialize in creating elegant, scalable solutions using cutting-edge technologies.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span>📧</span>
                  <span style={{ color: colors.sidebarText }}>ahmedmahfujsy@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span>📱</span>
                  <span style={{ color: colors.sidebarText }}>+1(437)-808-4685</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span>📍</span>
                  <span style={{ color: colors.sidebarText }}>Winnipeg, MB, Canada</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span>💼</span>
                  <span style={{ color: colors.sidebarText }}>Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Details */}
        <div 
          className="rounded-xl p-6 lg:p-8 shadow-lg border"
          style={{ 
            background: colors.sidebar,
            borderColor: colors.border
          }}
        >
          <h3 className="text-xl lg:text-2xl font-bold mb-6" style={{ color: colors.text }}>
            My Journey
          </h3>
          <div className="prose prose-lg max-w-none" style={{ color: colors.sidebarText }}>
            <p className="mb-4 leading-relaxed">
              I&apos;m a dedicated full-stack developer with a strong foundation in modern web technologies. 
              My journey in software development began with a fascination for solving complex problems 
              through code, and it has evolved into a passion for creating user-centric applications 
              that make a real difference.
            </p>
            <p className="mb-4 leading-relaxed">
              With expertise in languages like C++, Python, and JavaScript, I&apos;ve developed a comprehensive 
              skill set that spans both front-end and back-end development. I have extensive experience 
              with React.js, Node.js, and modern database technologies, allowing me to build complete, 
              scalable web applications from concept to deployment.
            </p>
            <p className="leading-relaxed">
              Beyond coding, I&apos;m passionate about continuous learning and staying up-to-date with the 
              latest industry trends. I&apos;ve solved over 1000+ programming challenges, which has strengthened 
              my problem-solving abilities and algorithmic thinking. I believe in writing clean, 
              maintainable code and creating intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Technical Skills */}
          <div 
            className="rounded-xl p-6 shadow-lg border"
            style={{ 
              background: colors.sidebar,
              borderColor: colors.border
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
              Technical Skills
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: colors.button }}>Languages</h4>
                <p className="text-sm" style={{ color: colors.sidebarText }}>
                  JavaScript, TypeScript, Python, C++, HTML5, CSS3
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: colors.button }}>Frameworks & Libraries</h4>
                <p className="text-sm" style={{ color: colors.sidebarText }}>
                  React.js, Next.js, Node.js, Express.js, Tailwind CSS
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: colors.button }}>Databases & Tools</h4>
                <p className="text-sm" style={{ color: colors.sidebarText }}>
                  MongoDB, PostgreSQL, Git, Docker, AWS, VS Code
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div 
            className="rounded-xl p-6 shadow-lg border"
            style={{ 
              background: colors.sidebar,
              borderColor: colors.border
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.text }}>
              Interests & Goals
            </h3>
            <div className="space-y-3 text-sm" style={{ color: colors.sidebarText }}>
              <div className="flex items-start gap-2">
                <span>🚀</span>
                <span>Building innovative web applications that solve real-world problems</span>
              </div>
              <div className="flex items-start gap-2">
                <span>💡</span>
                <span>Exploring new technologies and staying updated with industry trends</span>
              </div>
              <div className="flex items-start gap-2">
                <span>🎯</span>
                <span>Competitive programming and algorithmic problem solving</span>
              </div>
              <div className="flex items-start gap-2">
                <span>🌱</span>
                <span>Contributing to open-source projects and developer community</span>
              </div>
              <div className="flex items-start gap-2">
                <span>🔧</span>
                <span>Database optimization and performance enhancement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="rounded-xl p-6 lg:p-8 text-center shadow-lg border"
          style={{ 
            background: colors.sidebar,
            borderColor: colors.border
          }}
        >
          <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: colors.text }}>
            Let&apos;s Work Together
          </h3>
          <p className="mb-6 text-base lg:text-lg" style={{ color: colors.sidebarText }}>
            I&apos;m always excited to take on new challenges and collaborate on interesting projects. 
            Whether you have a specific project in mind or just want to connect, I&apos;d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              style={{ 
                background: colors.button,
                color: colors.buttonText 
              }}
            >
              Get In Touch
            </a>
            <a 
              href="/projects"
              className="px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 hover:opacity-80 inline-block"
              style={{ 
                borderColor: colors.border,
                color: colors.text,
                backgroundColor: 'transparent'
              }}
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce-around {
          0% { 
            transform: translateX(0px) translateY(0px) scale(1);
          }
          12.5% { 
            transform: translateX(8px) translateY(-6px) scale(1.02);
          }
          25% { 
            transform: translateX(0px) translateY(-10px) scale(1);
          }
          37.5% { 
            transform: translateX(-8px) translateY(-6px) scale(1.02);
          }
          50% { 
            transform: translateX(-10px) translateY(0px) scale(1);
          }
          62.5% { 
            transform: translateX(-8px) translateY(6px) scale(1.02);
          }
          75% { 
            transform: translateX(0px) translateY(10px) scale(1);
          }
          87.5% { 
            transform: translateX(8px) translateY(6px) scale(1.02);
          }
          100% { 
            transform: translateX(0px) translateY(0px) scale(1);
          }
        }
        
        @keyframes float-up {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-15px) scale(1.1);
            opacity: 0.1;
          }
        }
        
        @keyframes bubble-pop {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.15;
          }
          50% { 
            transform: scale(1.3);
            opacity: 0.25;
          }
        }
        
        @keyframes code-blink {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.05;
            transform: scale(1.1);
          }
        }
        
        @keyframes idea-flash {
          0%, 90%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          5%, 10% { 
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
