import React from "react";

const GithubReadme: React.FC = () => (
  <div className="p-2 lg:p-8 flex flex-col items-center gap-4 lg:gap-6">
    <img
      src="https://avatars.githubusercontent.com/u/57091611?v=4"
      alt="Mahfuj Ahmed"
      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-blue-400 shadow-lg mb-2 lg:mb-4"
    />
    <div className="prose prose-invert max-w-full lg:max-w-2xl text-left px-2 lg:px-0">
      <h1 className="text-lg lg:text-2xl">Hi 👋, I&apos;m Mahfuj Ahmed - Full Stack Developer</h1>
      <img 
        src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=18&pause=1000&color=4EC9B0&center=true&vCenter=true&width=300&lines=Full+Stack+Developer;Mobile+App+Developer;Problem+Solving+Enthusiast;" 
        alt="Typing SVG" 
        className="mx-auto mb-2 lg:mb-4 w-full max-w-xs lg:max-w-md" 
      />
      <h2 className="text-base lg:text-xl">🚀 About Me</h2>
      <ul className="text-sm lg:text-base">
        <li>💻 <b>Software Developer</b> specializing in <b>Full Stack Web & Mobile Development</b></li>
        <li>🎓 Currently pursuing <b>Diploma in Full Stack Web Development</b> at <b>Red River College</b></li>
        <li>🏆 <b>Contest Champion</b> with <b>1000+ programming challenges</b> solved across <b>Codeforces & LeetCode</b></li>
        <li>🥇 <b>Group Champion at Sprint-Innovation 2025</b></li>
        <li>🌱 Building scalable applications with <b>React.js</b>, <b>React Native</b>, <b>Django</b>, and <b>Next.js</b></li>
        <li>💼 <b>Junior Software Engineer</b> experience with performance optimization (39% &rarr; 90% improvement)</li>
        <li>📍 <b>Winnipeg, MB, Canada</b> | Open to <b>remote opportunities</b></li>
      </ul>
      <h2 className="text-base lg:text-xl">💡 What I Do</h2>
      <pre className="bg-gray-900 text-green-400 p-2 lg:p-4 rounded-lg overflow-x-auto text-xs lg:text-sm mb-2 lg:mb-4">
{`class FullStackDeveloper:
    def __init__(self):
        self.name = "Mahfuj Ahmed"
        self.role = "Full Stack & Mobile Developer"
        self.location = "Winnipeg, MB, Canada"
        self.languages = ["Python", "JavaScript", "TypeScript", "C++", "PHP"]
        self.frameworks = ["React.js", "React Native", "Next.js", "Django", "Django REST"]
        self.databases = ["MySQL", "PostgreSQL", "SQLite", "Supabase"]
        self.achievements = ["1000+ problems solved", "Contest Champion", "Performance optimization expert"]
    def say_hi(self):
        print(&quot;Thanks for dropping by! Let&apos;s build something amazing together.&quot;)

me = FullStackDeveloper()
me.say_hi()`}
      </pre>
      <h2 className="text-base lg:text-xl">🛠️ Tech Stack</h2>
      <p className="text-sm lg:text-base">Frontend & Mobile: React, React Native, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</p>
      <p className="text-sm lg:text-base">Backend: Python, Django, Node.js, PHP, Supabase</p>
      <p className="text-sm lg:text-base">Database & Tools: MySQL, PostgreSQL, Git, Docker</p>
      <p className="text-sm lg:text-base">Problem Solving: C++, Python</p>
      <h2 className="text-base lg:text-xl">🏆 Achievements</h2>
      <ul className="text-sm lg:text-base">
        <li>🥇 Group Champion at Sprint-Innovation 2025 (Canada Life, Tech Manitoba, RRC)</li>
        <li>🏆 Champion at SPI Intra Programming Contest</li>
        <li>🥈 Runner-Up at LU Intra Programming Contest</li>
        <li>💻 1000+ problems solved across Codeforces & LeetCode</li>
        <li>📈 Performance Optimization Expert: Improved WordPress theme performance from 39% to 90%</li>
        <li>🚀 Full Stack Experience: Built scalable web & mobile applications from frontend to database</li>
      </ul>
      
      <h2 className="text-base lg:text-xl">📊 GitHub Stats</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mb-2 lg:mb-4">
        <img src="https://github-readme-stats.vercel.app/api?username=mahfuj02&hide=stars,prs,contribs&show_icons=true&title_color=4EC9B0&icon_color=bb2acf&text_color=daf7dc&bg_color=151515&border_color=4EC9B0" alt="GitHub Stats" className="w-full max-w-sm lg:max-w-md mx-auto" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=mahfuj02&theme=dark&border=4EC9B0&stroke=4EC9B0&ring=4EC9B0&fire=ff6b6b&currStreakNum=4EC9B0" alt="GitHub Streak" className="w-full max-w-sm lg:max-w-md mx-auto" />
      </div>
      <div className="grid grid-cols-1 gap-2 lg:gap-4 mb-2 lg:mb-4">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=mahfuj02&show_icons=true&locale=en&layout=compact&theme=dark&title_color=4EC9B0&text_color=daf7dc&bg_color=151515&border_color=4EC9B0" alt="Top Languages" className="w-full max-w-md mx-auto" />
        <img src="https://github-readme-activity-graph.vercel.app/graph?username=mahfuj02&theme=react-dark&bg_color=151515&line=4EC9B0&point=ff6b6b&color=daf7dc&border=4EC9B0" alt="Contribution Graph" className="w-full max-w-full mx-auto" />
      </div>
      
      <h2 className="text-base lg:text-xl">🚀 Competitive Programming</h2>
      <div className="flex justify-center mb-2 lg:mb-4">
        <img src="https://leetcode.card.workers.dev/mahfuj02?theme=dark&font=baloo&extension=null" alt="LeetCode Stats" className="w-full max-w-xs lg:max-w-sm" />
      </div>
      
      <h2 className="text-base lg:text-xl">🌐 Connect with me</h2>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-2 lg:mb-4">
        <a href="https://www.linkedin.com/in/mahfuj02/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" className="h-6 w-6 lg:h-8 lg:w-8" />
        </a>
        <a href="https://codeforces.com/profile/mahfuj02" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg" alt="Codeforces" className="h-6 w-6 lg:h-8 lg:w-8" />
        </a>
        <a href="https://leetcode.com/mahfuj02" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="LeetCode" className="h-6 w-6 lg:h-8 lg:w-8" />
        </a>
      </div>
      
      <div className="flex justify-center">
        <img src="https://komarev.com/ghpvc/?username=mahfuj02&label=Profile%20views&color=4EC9B0&style=flat" alt="Profile Views" />
      </div>
    </div>
  </div>
);

export default GithubReadme;
