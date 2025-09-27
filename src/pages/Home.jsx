import React from "react";
import heroImg from "/src/assets/images/landingPage.png";
const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-[radial-gradient(circle_at_right,rgba(0,128,0,0.5),transparent_25%)] min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="flex flex-col mt-10 md:flex-row items-center justify-between max-w-5xl w-full gap-16 ">
        {/* Left Content */}
        <div className="text-left px-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] bg-clip-text text-transparent">
            Hi, <br /> I'm Sushant.
          </h1>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-lg">
            I build modern, dynamic, and interactive web applications that not
            only look great but also perform flawlessly. With expertise in
            React.js, Node.js, Express, MongoDB, Tailwind CSS, and GSAP
            animations, I turn ideas into seamless digital experiences.
          </p>

          <a href="#contact">
            <button className="px-7 py-3 mt-4 font-semibold border-2 border-white rounded-xl bg-[#00ff9d] cursor-pointer text-black hover:bg-transparent hover:text-white transition-all">
              Get in Touch
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <img
            src={heroImg}
            alt="Developer Illustration"
            className="relative w-72 animate-float md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
