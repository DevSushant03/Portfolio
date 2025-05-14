import React from "react";

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
            <div className="share"></div>
            <a data-aos="fade-up" href="https://drive.google.com/file/d/1yVzq_oFGg6W2mNPyCpsDobl59XqblY1p/view?usp=drive_link">
              <button>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
