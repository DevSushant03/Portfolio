import React from "react";
import project from "/src/API/projectData.js";

const Project = () => {
  return (
    <section id="project" className="project-section-body centered">
      <div className="project-section centered-vertical">
        <h1>PROJECTS</h1>
        <p></p>
        <div className="projectCard centered">
          {project.map((cur, id) => {
            return (
              <div data-aos="zoom-in-up" key={id} className="card centered-vertical">
                <img src={cur.image} alt="" />
                <h2>{cur.name}</h2>
                <p>{cur.description}</p>
                <span className="centered">
                  {cur.technologies.map((tech,key) => {
                    return <li key={key}>{tech}</li>;
                  })}
                </span>
                <span className="linkBtn centered">
                  <a href={cur.liveDemo} target="_blank">Preview</a>
                  <a href={cur.githubRepo} target="_blank">Code</a>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
