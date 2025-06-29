import React, { useState, useEffect } from "react";

const GlowingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Cursor Spot */}
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
          zIndex: 0,
          transition: "top 0.05s linear, left 0.05s linear",
        }}
      />
    </div>
  );
};

export default GlowingCursor;
