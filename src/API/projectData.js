import weatherAppImg from "/src/assets/images/weatherApp.png";
import atlasImg from "/src/assets/images/atlasProject.png";
import Quink from "/src/assets/images/urlShortner.png";
import viseverse from "/src/assets/images/viseverse.png";
import calmnity from "/src/assets/images/clamnity.png";
import tasktribe from "/src/assets/images/tasktribe.png";

const project = [
  {
    name: "ViseVerse",
    description:
      "ViseVerse is a smart web app & Chrome extension that extracts text from images using OCR and enhances it with AI and export to PDF/DOCX/TXT.",
    technologies: ["React.js", "Node.js", "tesserect.js"],
    image: viseverse,
    liveDemo: "https://viseverse.netlify.app/",
    githubRepo: "https://github.com/DevSushant03/",
  },
  {
    name: "TaskTribe",
    description:
      "TaskTribe is a collaborative task marketplace where anyone can post tasks, find help, and get work done efficiently",
    technologies: ["React.js", "Node.js", "MongoDB"],
    image: tasktribe,
    liveDemo: "https://tasktribe-plum.vercel.app/",
    githubRepo: "https://github.com/DevSushant03",
  },
  {
    name: "Calmnity",
    description:
      "Calmnity is a digital platform that promotes mindfulness and mental well-being through mood tracking and personalized calming activities.",
    technologies: ["React.js", "Node.js", "AI"],
    image: calmnity,
    liveDemo: "https://calmnity-dduc.vercel.app/",
    githubRepo: "https://github.com/DevSushant03",
  },

  {
    name: "Url Shortner",
    description:
      "Built a full-stack URL shortener with user authentication, custom links, and session management.",
    technologies: ["Node.js", "Express.js", "MySql"],
    image: Quink,
    liveDemo: "https://urlshortner-z8cu.onrender.com/",
    githubRepo: "https://github.com/DevSushant03/UrlShortner",
  },
  {
    name: "Weather Application",
    description:
      "A weather forecasting app that pulls real-time data from the OpenWeather API. Users can search for any city to get current weather information.",
    technologies: ["React.js", "CSS", "Weather API"],
    image: weatherAppImg,
    liveDemo: "https://climatora.netlify.app/",
    githubRepo: "https://github.com/DevSushant03/WeatherGlobe",
  },
  {
    name: "Atlas",
    description:
      "AroundTheMap is a React-based web application that allows users to search and explore country-specific information.",
    technologies: ["React.js", "CSS", "Api"],
    image: atlasImg,
    liveDemo: "https://aroundthemap.netlify.app",
    githubRepo: "#",
  },
];
export default project;
