import "./App.css";
import Footer from "./components/Footer";
import GlowingCursor from "./components/GlowingCursor";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <GlowingCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
