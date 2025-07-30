import React, { useState, useEffect } from "react";

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen on document instead of window
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 10,
        left: position.x - 10,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgb(0, 255, 64)",
        boxShadow: "0 0 20px 8px rgb(0, 255, 76)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "top 0.05s linear, left 0.05s linear, opacity 0.2s",
      }}
    />
  );
};

export default GlowingCursor;
