import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [active, setactive] = useState(false);
  return (
    <>
      <div className="Navbar-section  centered">
        <div data-aos="fade-down" className="navbar">
          <span>Sushant</span>
          <div className="nav-btn centered">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>
          <button onClick={() => setactive(!active)} className="bar-btn"><FaBars/> </button>
        </div>

        {active && (
          <div data-aos="fade-down" className="mob-nav centered-vertical">
            <a onClick={() => setactive(!active)} href="#home">Home</a>
            <a onClick={() => setactive(!active)} href="#about">About</a>
            <a onClick={() => setactive(!active)} href="#skill">Skill</a>
            <a onClick={() => setactive(!active)} href="#project">Project</a>
            <a onClick={() => setactive(!active)} href="#contact">Contact</a>
            <button onClick={() => setactive(!active)}>X</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
