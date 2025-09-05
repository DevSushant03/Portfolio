import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin ,FaInstagramSquare } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="About-section-body centered">
      <div className="About-section centered">
        <div className="AboutProfile">
          <div className="profilecard">
            <h1 data-aos="fade-up">About Me</h1>
            <div data-aos="fade-up" className="img"></div>
            <p data-aos="fade-up" className="info">
              Hi! I'm Sushant, a frontend developer pursuing a B.Sc. in IT. I
              specialize in HTML, CSS, JavaScript, and React.js, building fast,
              responsive, and user-friendly websites. I'm a quick learner
              passionate about real-world projects, and I'm aiming to become a
              full-stack developer. Currently open to internships and
              collaborations.
            </p>
            <div data-aos="fade-up" className="share">
              <span><a href="https://github.com/DevSushant03"><FaSquareGithub /></a></span>
              <span><a href="https://www.linkedin.com/in/sushant-nachanekar/"><FaLinkedin /></a></span>
              <span><a href="https://www.instagram.com/mr__sushant__030/?utm_source=qr&r=nametag"><FaInstagramSquare /></a></span>

            </div>
            <a data-aos="fade-up" target="_blank" href="https://drive.google.com/file/d/1BvbHZuY4T63MU8zqt2Pq8qxiwQtLkLHF/view">
              <button>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
