import React from "react";

const Experience: React.FC = () => (
  <section>
    <h2 className="text-xl font-bold mb-2">Experience</h2>
    <div className="bg-neutral-800 rounded p-4 mb-4 border-l-4 border-teal-400">
      <div className="font-semibold text-lg">Junior Software Engineer</div>
      <div className="text-sm text-neutral-400">LIILAB • Sylhet, Bangladesh</div>
      <div className="text-sm text-neutral-400 mb-2">March 2021 – September 2022</div>
      <ul className="list-disc ml-6 text-neutral-200 text-sm mb-2">
        <li>Optimized database queries and implemented real-time performance improvements for high-traffic e-commerce platform</li>
        <li>Improved WordPress theme performance score from 39% to over 90%</li>
        <li>Developed RESTful APIs using Django</li>
        <li>Collaborated in code reviews, database schema design, & UX research</li>
      </ul>
      <div className="flex gap-2 flex-wrap mt-2">
        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Django</span>
        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">WordPress</span>
        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">MySQL</span>
        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">REST API</span>
      </div>
    </div>
  </section>
);

export default Experience;
