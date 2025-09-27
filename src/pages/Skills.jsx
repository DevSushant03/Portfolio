import React from "react";
import skills from "../API/SkillData.js";

const Skills = () => {
  return (
    <section id="skill" className="w-full min-h-screen py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        🚀 My <span className="text-green-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transform transition duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-white-500 to-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-sm mt-2 text-gray-300">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
