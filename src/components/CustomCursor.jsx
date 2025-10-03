import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-green-500 rounded-full pointer-events-none transition-transform duration-150 ease-out z-[9999]"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
