import React from "react";
import heroImg from "/src/assets/images/landingPage.png";
const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-[radial-gradient(circle_at_right,rgba(0,128,0,0.5),transparent_25%)] min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full gap-16 ">
        {/* Left Content */}
        <div className="text-left px-10 space-y-6">
          <h1
            
            className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#00ff9d] to-[#00f0ff] bg-clip-text text-transparent"
          >
            Hi, <br /> I'm Sushant.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="1800"
            className="text-gray-300 max-w-md mx-auto md:mx-0 text-lg"
          >
            A Frontend Developer Crafting Exceptional Web Experiences. I build
            fast, responsive, and modern websites that delight users and drive
            results.
          </p>

          <a href="#contact" data-aos="fade-up" data-aos-duration="2000">
            <button className="px-7 py-3 mt-4 font-semibold rounded-xl bg-[#00ff9d] text-black shadow-[0_0_15px_#00ff9d] hover:shadow-[0_0_25px_#00ff9d,0_0_50px_#00ff9d] transition-all duration-300">
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
