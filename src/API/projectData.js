import weatherAppImg from "/src/assets/images/weatherApp.png";
import atlasImg from "/src/assets/images/atlasProject.png"

const project = [
  {
    "name": "Atlas",
    "description": "AroundTheMap is a React-based web application that allows users to search and explore country-specific information.",
    "technologies": ["React.js", "CSS", "API"],
    "image": atlasImg,
    "liveDemo": "https://aroundthemap.netlify.app",
    "githubRepo": "#"
  },

  {
    "name": "Weather Application",
    "description": "A weather forecasting app that pulls real-time data from the OpenWeather API. Users can search for any city to get current weather information.",
    "technologies": ["React.js", "CSS", "Weather API"],
    "image": weatherAppImg,
    "liveDemo": "https://climatora.netlify.app/",
    "githubRepo": "#"
  },

  // {
  //   "name": "Blogging Platform",
  //   "description": "A full-stack blogging platform where users can sign up, create, edit, and delete blog posts. It also features a comment system and user authentication with JWT.",
  //   "technologies": ["React.js", "CSS"],
  //   "image": "/src/assets/images/atlasProject.png",
  //   "liveDemo": "https://aroundthemap.netlify.app",
  //   "githubRepo": "#"
  // }
]
export default project;