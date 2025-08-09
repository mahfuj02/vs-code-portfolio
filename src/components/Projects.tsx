import React from "react";

const Projects: React.FC = () => (
  <section>
    <h2 className="text-xl font-bold mb-2">Projects</h2>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700 hover:border-blue-600 transition">
        <div className="font-semibold text-lg mb-1">🎮 Game Hub</div>
        <div className="text-sm text-neutral-400 mb-2">React.js, TypeScript, React Query, Zustand</div>
        <p className="text-neutral-200 text-sm mb-2">Game platform using React.js with React Query and Zustand for optimized state management. Responsive UI with reusable architecture.</p>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700 hover:border-blue-600 transition">
        <div className="font-semibold text-lg mb-1">🛒 Grocery Bazar</div>
        <div className="text-sm text-neutral-400 mb-2">Python, Django, React, SQLite</div>
        <p className="text-neutral-200 text-sm mb-2">Full-stack e-commerce app with React frontend and Django backend. Reusable APIs and optimized database queries.</p>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700 hover:border-blue-600 transition">
        <div className="font-semibold text-lg mb-1">🤝 Golden Rule Volunteer</div>
        <div className="text-sm text-neutral-400 mb-2">HTML, CSS, JavaScript, PHP, MySQL</div>
        <p className="text-neutral-200 text-sm mb-2">PHP/MySQL backend for event data, user registrations, and notifications. Community-focused technology.</p>
      </div>
    </div>
  </section>
);

export default Projects;
