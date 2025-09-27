import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold text-white tracking-wide">
          Sushant<span className="text-green-500">.Dev</span>
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a
            href="#home"
            className="p-1 px-2 rounded-full hover:text-black hover:bg-green-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="p-1 px-2 rounded-full hover:text-black hover:bg-green-500 transition"
          >
            About
          </a>
          <a
            href="#skill"
            className="p-1 px-2 rounded-full hover:text-black hover:bg-green-500 transition"
          >
            Skills
          </a>
          <a
            href="#project"
            className="p-1 px-2 rounded-full hover:text-black hover:bg-green-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="p-1 px-2 rounded-full hover:text-black hover:bg-green-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setActive(true)}
          className="text-white text-2xl md:hidden"
        >
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 py-5 w-full bg-black/95 backdrop-blur-xl drop-shadow-[0_4px_3px_rgba(0,255,0,0.5)] transform transition-transform duration-300 ease-in-out ${
          active ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setActive(false)}
          className="absolute top-5 right-5 text-3xl text-white"
        >
          <IoClose />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-6 text-2xl text-gray-300">
          <a
            onClick={() => setActive(false)}
            href="#home"
            className="hover:text-green-500 transition"
          >
            Home
          </a>
          <a
            onClick={() => setActive(false)}
            href="#about"
            className="hover:text-green-500 transition"
          >
            About
          </a>
          <a
            onClick={() => setActive(false)}
            href="#skill"
            className="hover:text-green-500 transition"
          >
            Skills
          </a>
          <a
            onClick={() => setActive(false)}
            href="#project"
            className="hover:text-green-500 transition"
          >
            Projects
          </a>
          <a
            onClick={() => setActive(false)}
            href="#contact"
            className="hover:text-green-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
