import React from "react";

const Skills: React.FC = () => (
  <section>
    <h2 className="text-xl font-bold mb-2">Skills & Achievements</h2>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
      <div className="bg-neutral-800 rounded p-4 border-l-4 border-teal-400">
        <div className="font-semibold mb-2">Programming Languages</div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">C++</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">JavaScript</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">TypeScript</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Python</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">PHP</span>
        </div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border-l-4 border-blue-600">
        <div className="font-semibold mb-2">Frameworks & Libraries</div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">React JS</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Next JS</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Django</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Django REST</span>
        </div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border-l-4 border-blue-400">
        <div className="font-semibold mb-2">Databases</div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">MySQL</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">PostgreSQL</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">SQLite</span>
        </div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border-l-4 border-purple-400">
        <div className="font-semibold mb-2">Web Technologies</div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">HTML5</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">CSS3</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Tailwind CSS</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Chakra UI</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Material UI</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Redux</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Zustand</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">React Query</span>
        </div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border-l-4 border-pink-400">
        <div className="font-semibold mb-2">Tools & Methodologies</div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Git</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Jira</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Bitbucket</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Docker</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">CI/CD</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Figma</span>
          <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Trello</span>
        </div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border-l-4 border-yellow-400">
        <div className="font-semibold mb-2">Achievements</div>
        <div className="text-neutral-200 text-sm">
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

export default Skills;
