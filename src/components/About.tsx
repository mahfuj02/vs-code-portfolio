import React from "react";

const About: React.FC = () => (
  <section>
    <h2 className="text-xl font-bold mb-2">About</h2>
    <div className="flex items-center gap-6 mb-4">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-2xl font-bold text-white">MA</div>
      <div>
        <div className="font-semibold text-lg">Md Mahfuj Ahmed</div>
        <div className="text-sm text-neutral-400">Software Developer</div>
        <div className="text-sm text-neutral-400">Winnipeg, MB, Canada</div>
      </div>
    </div>
    <p className="text-neutral-200 mb-2">Software Developer with 3+ years of experience. Strong foundation in C++ and Python, experienced with modern front-end frameworks like React.js. Proven record of optimizing databases and solving 1000+ programming challenges.</p>
    <ul className="text-neutral-300 text-sm">
      <li>Email: ahmedmahfujsy@gmail.com</li>
      <li>Phone: +1(437)-808-4685</li>
      <li>GitHub: mahfuj02</li>
      <li>LinkedIn: mahfuj02</li>
    </ul>
  </section>
);

export default About;
