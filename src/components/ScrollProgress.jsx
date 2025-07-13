// src/components/ScrollProgress.jsx
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrolled / height) * 100;
    setScrollWidth(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:mt-14"
      style={{
        position: "fixed",
        top: "115px",
        left: 0,
        height: "8px",
        width: `${scrollWidth}%`,
        background: "#EC017E",
        borderRadius: "2px",
        zIndex: 999998, // dots-overlay ostida
        transition: "width 0.2s ease",
        mixBlendMode: "multiply",
      }}
    ></div>
  );
};

export default ScrollProgress;
