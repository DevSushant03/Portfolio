import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollVelocity from "./components/ScrollVelocity";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <ScrollVelocity
        texts={["Code. Design. Deploy.", "Full Stack Developer"]}
        className="custom-scroll-text"
      />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
