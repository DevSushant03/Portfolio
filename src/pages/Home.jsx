import React, { useRef } from "react";
import heroImg from "/src/assets/images/landingPage.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Home = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const textSplit = new SplitText("h1", { type: "chars,words" });
      // const paragraph = new SplitText("p", { type: "lines" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "center 10%",
            scrub: true,
          },
        })
        .to(textSplit.chars, { y: -50, stagger: 0.02, opacity: 0 }, 0);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#home",
            start: "center top",
            end: "bottom 30%",
            scrub: true,
          },
        })
        .to(
          "p , a, img",
          { opacity: 0, stagger: 0.02, ease: "power2.out" },
          0
        );

      gsap.from(textSplit.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.05,
      });

      gsap.from("p ,a,img", {
        opacity: 0,
        y: 40,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.3,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      className="relative bg-[radial-gradient(circle_at_right,rgba(0,128,0,0.5),transparent_25%)] min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex flex-col mt-10 md:flex-row items-center justify-between max-w-5xl w-full gap-16 "
      >
        {/* Left Content */}
        <div className="home-text text-left px-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-500">
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
        <div className="home-img relative group">
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
