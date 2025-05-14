import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration (in ms)
      once: false, // Only animate once
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
