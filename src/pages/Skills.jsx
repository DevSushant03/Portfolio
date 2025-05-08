import React from "react";
import skills from "../API/SkillData.json";

const Skills = () => {
  return (
    <section id="skill" className="skill-section-body centered">
      <div className="centered-vertical  skill-section">
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >MY SKILLS</h1>
        <p data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          I have hands-on experience with a range of modern web technologies and
          tools, which allow me to build responsive, user-friendly, and
          high-performance websites.
        </p>
        <div className="skillCardContainer">
          {skills.map((cur, id) => {
            return (
              <div data-aos="zoom-in-up" key={id} className="skillCard centered-vertical">
                <img src={cur.image} alt="" />
                <h4>{cur.name}</h4>
                <p>{cur.level}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
