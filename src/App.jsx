import { useEffect } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

import Lenis from "lenis";

const App = () => {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
