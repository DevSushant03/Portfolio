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
    class="glowSpot hidden md:block bg-[radial-gradient(circle_at_center,rgba(0,128,0,0.5),transparent_25%)]"
      style={{
        position: "fixed",
        top: position.y - 100,
        left: position.x - 100,
        width: 200,
        height: 200,
        pointerEvents: "none",
        zIndex:2,
        opacity: isVisible ? 1 : 0,
        transition: "top 0.2s linear, left 0.2s linear, opacity 0.4s",
      }}
    />
  );
};

export default GlowingCursor;
