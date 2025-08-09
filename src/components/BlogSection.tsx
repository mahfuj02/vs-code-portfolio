import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "How to Build a Portfolio with Next.js",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    preview: "Learn how to create a modern developer portfolio using Next.js, TypeScript, and Tailwind CSS. We'll cover layout, theming, and deployment.",
    content: `Full blog content for How to Build a Portfolio with Next.js.\n\nStep 1: Scaffold your project...\nStep 2: Add theme support...\nStep 3: Deploy to Vercel...`
  },
  {
    id: 2,
    title: "VSCode UI Tricks for Developers",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    preview: "Discover how to mimic VSCode's interface in your web projects. Sidebar, tabs, and activity bar tips for a familiar UX.",
    content: `Full blog content for VSCode UI Tricks for Developers.\n\nSidebar: Use flex layouts...\nTabs: Dynamic styling...\nActivity Bar: Icon navigation...`
  },
  {
    id: 3,
    title: "Theming in React: Context & CSS",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    preview: "A practical guide to implementing theme switching in React apps using Context and CSS variables.",
    content: `Full blog content for Theming in React: Context & CSS.\n\nContext API: Provide theme...\nCSS Variables: Dynamic colors...\nBest practices...`
  },
  {
    id: 4,
    title: "Optimizing Performance in Next.js",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    preview: "Tips and techniques for speeding up your Next.js apps, including code splitting and image optimization.",
    content: `Full blog content for Optimizing Performance in Next.js.\n\nCode splitting...\nImage optimization...\nServer-side rendering...`
  },
  {
    id: 5,
    title: "Getting Started with Tailwind CSS",
    image: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f9?auto=format&fit=crop&w=400&q=80",
    preview: "A beginner's guide to Tailwind CSS, utility-first styling, and rapid UI development.",
    content: `Full blog content for Getting Started with Tailwind CSS.\n\nUtility classes...\nResponsive design...\nCustom themes...`
  },
  {
    id: 6,
    title: "Why TypeScript for React Projects?",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    preview: "Explore the benefits of using TypeScript in React projects, including type safety and better tooling.",
    content: `Full blog content for Why TypeScript for React Projects?.\n\nType safety...\nTooling...\nRefactoring confidence...`
  }
];

const BlogSection: React.FC = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [fullView, setFullView] = useState(false);

  if (selectedBlogId !== null) {
    const blog = blogs.find(b => b.id === selectedBlogId);
    if (!blog) return null;
    // Full blog section
    if (fullView) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-blue-950 rounded-lg p-8 shadow-2xl max-w-2xl w-full relative cursor-pointer" onClick={() => setFullView(false)}>
            <button className="absolute top-4 right-4 text-blue-300 underline text-sm" onClick={e => {e.stopPropagation(); setSelectedBlogId(null); setFullView(false);}}>Back</button>
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-blue-400">{blog.title}</h2>
            <div className="text-blue-200 whitespace-pre-line mb-4">{blog.content}</div>
            <div className="text-blue-100">Click anywhere to close full view.</div>
          </div>
        </div>
      );
    }
    return (
      <div className="p-8">
        <button className="text-blue-300 underline text-sm mb-4" onClick={() => setSelectedBlogId(null)}>Back</button>
        <div className="bg-blue-950 rounded-lg p-8 shadow-lg cursor-pointer hover:scale-105 transition" onClick={() => setFullView(true)}>
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-blue-400">{blog.title}</h2>
          <div className="text-blue-200 whitespace-pre-line mb-4">{blog.content}</div>
          <div className="text-blue-100">Click to expand to full view.</div>
        </div>
      </div>
    );
  }

  // Blog list view
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-blue-950 rounded-lg p-6 shadow-lg hover:scale-105 transition cursor-pointer" onClick={() => setSelectedBlogId(blog.id)}>
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-blue-400">{blog.title}</h3>
            <p className="text-blue-100 mb-2">{blog.preview}</p>
            <div className="text-blue-300 underline text-sm mt-2">Read More</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
