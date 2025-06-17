import weatherAppImg from "/src/assets/images/weatherApp.png";
import atlasImg from "/src/assets/images/atlasProject.png"
import Quink from "/src/assets/images/urlShortner.png"


const project = [
  {
    "name": "Weather Application",
    "description": "A weather forecasting app that pulls real-time data from the OpenWeather API. Users can search for any city to get current weather information.",
    "technologies": ["React.js", "CSS", "Weather API"],
    "image": weatherAppImg,
    "liveDemo": "https://climatora.netlify.app/",
    "githubRepo": "https://github.com/DevSushant03/WeatherGlobe"
  },

  {
    "name": "Url Shortner",
    "description": "Built a full-stack URL shortener with user authentication, custom links, and session management.",
    "technologies":["Node.js", "Express.js", "MySql"],
    "image": Quink,
    "liveDemo": "https://urlshortner-z8cu.onrender.com/",
    "githubRepo": "https://github.com/DevSushant03/UrlShortner"
  },
  {
    "name": "Atlas",
    "description": "AroundTheMap is a React-based web application that allows users to search and explore country-specific information.",
    "technologies":  ["React.js", "CSS" ,"Api"],
    "image": atlasImg,
    "liveDemo": "https://aroundthemap.netlify.app",
    "githubRepo": "#"
  },
]
export default project;