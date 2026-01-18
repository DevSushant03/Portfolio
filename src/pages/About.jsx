import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[radial-gradient(circle_at_left,rgba(0,128,0,0.5),transparent_25%)] text-white flex justify-center px-6 py-20"
    >
      <div className="w-full max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#00ff9d] mb-10">
          About Me
        </h1>

        {/* Profile Card */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="w-20 h-20 bg-white rounded-xl mb-6"></div>

          {/* Bio */}
          <p className="text-gray-200 max-w-2xl text-base md:text-lg leading-relaxed mb-6">
            Hi! I'm <span className="font-semibold">Sushant</span>, a{" "}
            <span className="text-[#00ff9d]">MERN stack developer</span>{" "}
            pursuing a B.Sc. in IT. I build fast, responsive, and interactive
            web applications using{" "}
            <span className="text-[#00ff9d]">
              React.js, Node.js, Express, MongoDB, Tailwind CSS, and GSAP
            </span>
            . Passionate about turning ideas into real-world projects, I enjoy
            creating user-friendly digital experiences and continuously learning
            new technologies. Currently open to{" "}
            <span className="text-[#00ff9d]">
              internships, freelance work, and collaborations
            </span>
            .
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mb-8 text-2xl">
            <a
              target="_blank"
              href="https://github.com/DevSushant03"
              className="hover:text-[#00ff9d] transition-colors duration-300"
            >
              <i className="text-4xl">
                <FaSquareGithub />
              </i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sushant-nachanekar"
              className="hover:text-[#00ff9d] transition-colors duration-300"
            >
              <i className="text-4xl">
                <FaLinkedin />
              </i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mr__sushant__030/?utm_source=qr&r=nametag"
              className="hover:text-[#00ff9d] transition-colors duration-300"
            >
              <i className="text-4xl">
                <FaInstagramSquare />
              </i>
            </a>
          </div>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1ks5K4fjvvdqqJsh7twaQrVyA4hPGOHxc/view?usp=sharing"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-[#00ff9d] hover:text-[#020d19] transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>

      
    </section>
  );
};

export default About;
