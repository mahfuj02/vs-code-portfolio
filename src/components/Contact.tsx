import React from "react";

const Contact: React.FC = () => (
  <section>
    <h2 className="text-xl font-bold mb-2">Contact</h2>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700">
        <div className="font-semibold text-lg mb-1">📧 Email</div>
        <div className="text-neutral-200 text-sm mb-2">ahmedmahfujsy@gmail.com</div>
        <div className="text-neutral-400 text-xs">Feel free to reach out for opportunities</div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700">
        <div className="font-semibold text-lg mb-1">📞 Phone</div>
        <div className="text-neutral-200 text-sm mb-2">+1(437)-808-4685</div>
        <div className="text-neutral-400 text-xs">Available during business hours</div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700">
        <div className="font-semibold text-lg mb-1">📍 Location</div>
        <div className="text-neutral-200 text-sm mb-2">Winnipeg, MB, Canada</div>
        <div className="text-neutral-400 text-xs">Open to remote work</div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700">
        <div className="font-semibold text-lg mb-1">💼 LinkedIn</div>
        <div className="text-blue-400 text-sm mb-2">linkedin.com/in/mahfuj02</div>
        <div className="text-neutral-400 text-xs">Professional networking</div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700">
        <div className="font-semibold text-lg mb-1">🔗 GitHub</div>
        <div className="text-blue-400 text-sm mb-2">github.com/mahfuj02</div>
        <div className="text-neutral-400 text-xs">Check out my projects</div>
      </div>
      <div className="bg-neutral-800 rounded p-4 border border-neutral-700">
        <div className="font-semibold text-lg mb-1">🎓 Education</div>
        <div className="text-neutral-200 text-sm mb-2">Red River College</div>
        <div className="text-neutral-400 text-xs">Full Stack Web Development (2023-2025)</div>
      </div>
    </div>
  </section>
);

export default Contact;
