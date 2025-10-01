import React from "react";
import project from "/src/API/projectData.js";

const Project = () => {
  return (
    <section id="project" className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1
          className="text-4xl font-bold text-green-400 mb-4"
          data-aos="fade-up"
        >
          Projects
        </h1>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
        >
          A collection of projects showcasing my skills in frontend & full-stack
          development. Built with modern technologies and clean design.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((cur, id) => (
            <div
              key={id}
              className="bg-gray-900/50 backdrop-blur-md border border-grey-700 rounded-2xl p-6 flex flex-col  hover:border-green-700 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cur.image}
                  alt={cur.name}
                  className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-white mt-4">
                {cur.name}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-2 flex-1">
                {cur.description}
              </p>

              {/* Technologies */}
              <ul className="flex flex-wrap gap-2 mt-4">
                {cur.technologies.map((tech, key) => (
                  <li
                    key={key}
                    className="px-3 py-1 text-xs bg-green-500/10 text-green-400 rounded-full border border-green-500/30"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <a
                  href={cur.liveDemo}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition-all"
                >
                  Preview
                </a>
                <a
                  href={cur.githubRepo}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-green-400 border border-green-500/40 hover:bg-gray-700 transition-all"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
