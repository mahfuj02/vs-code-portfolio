"use client";

import VSCodeLayout from "../../components/VSCodeLayout";
import BlogSection from "../../components/BlogSection";
import FileExplorer from "../../components/FileExplorer";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [showThemePage, setShowThemePage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <VSCodeLayout
      sidebar={!isMobile ? <FileExplorer /> : null}
      showThemePage={showThemePage}
      setShowThemePage={setShowThemePage}
      isMobile={isMobile}
    >
      <BlogSection />
    </VSCodeLayout>
  );
}
