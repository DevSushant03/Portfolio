import React from "react";
import heroImg from "/src/assets/images/landingPage.png";
const Home = () => {
  return (
    <section id="home" className="Hero-section centered">
      <div className="hero-section-container centered">
        <div  className="context">
          <h1 data-aos="fade-up"
     data-aos-duration="3000">Hi, <br />I'm Sushant. </h1>
          <h4 data-aos="fade-up"
     data-aos-duration="3000">A Frontend Developer Crafting Exceptional Web Experiences.</h4>
          <p data-aos="fade-up"
     data-aos-duration="3000">
            I specialize in building responsive, high-performing websites that
            delight users and drive results.
          </p>
          <button data-aos="fade-up"
     data-aos-duration="3000" className="shadow__btn">Get in touch</button>
          
        </div>
            <img data-aos="fade-up"
     data-aos-duration="3000" src={heroImg} alt="icon" />
      </div>
    </section>
  );
};

export default Home;
