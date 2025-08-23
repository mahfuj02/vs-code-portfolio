"use client";

import VSCodeLayout from "../../components/VSCodeLayout";
import About from "../../components/About";
import FileExplorer from "../../components/FileExplorer";
import { useState, useEffect } from "react";

export default function AboutPage() {
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
      <About />
    </VSCodeLayout>
  );
}
