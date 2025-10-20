import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setsize] = useState({ width: 40, height: 40 });

  useEffect(() => {
    // Update cursor position
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    // Handle anchor hover
    const anchorTags = document.querySelectorAll("a");

    const handleHover = (e) => {
      const rect = e.target.getBoundingClientRect();
      setsize({ width: rect.width, height: rect.height });
      console.log("Width:", rect.width);
      console.log("Height:", rect.height);
    };
    const handleReset = (e) => {
      setsize({ width: 40, height: 40 });
    };

    anchorTags.forEach((a) => a.addEventListener("mouseover", handleHover));
    anchorTags.forEach((a) => a.addEventListener("mouseleave", handleReset));

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      anchorTags.forEach((a) =>
        a.removeEventListener("mouseover", handleHover)
      );
      anchorTags.forEach((a) =>
        a.removeEventListener("mouseleave", handleReset)
      );
    };
  }, []);

  return (
    <div className="">
      <div
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          transform: `translate(${position.x - size.width / 3}px, ${
            position.y - size.height / 3
          }px)`,
        }}
        className="hidden md:block fixed top-0 left-0 bg-transparent pointer-events-none transition-transform duration-150 ease-out z-[99]"
      >
        <span className="absolute mb-1 top-0 left-0 w-4 h-4 border-t-3 border-l-3 border-green-500"></span>
        <span className="absolute m-b1 top-0 right-0 w-4 h-4 border-t-3 border-r-3 border-green-500"></span>
        <span className="absolute mt-1 bottom-0 left-0 w-4 h-4 border-b-3 border-l-3 border-green-500"></span>
        <span className="absolute mt-1 bottom-0 right-0 w-4 h-4 border-b-3 border-r-3 border-green-500"></span>
      </div>
    </div>
  );
};

export default CustomCursor;
