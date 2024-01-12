import React from "react";
import "../style/Facts.css";
const Facts = ({ planet }) => {
  const planets = {
    Mercury: 0,
    Venus: 1,
    Earth: 2,
    Mars: 3,
    Jupiter: 4,
    Saturn: 5,
    Uranus: 6,
    Neptune: 7,
  };
  const planetInfo = {
    rotation: "",
    revolution: "",
    radius: "",
    temp: "",
  };

  const handleData = () => {
    const data = require("../data.json");
    const currPlanet = planets[planet];
    planetInfo.rotation = data.planets[currPlanet].rotation;
    planetInfo.revolution = data.planets[currPlanet].revolution;
    planetInfo.radius = data.planets[currPlanet].radius;
    planetInfo.temp = data.planets[currPlanet].temperature;
  };
  handleData();
  return (
    <div className="fact-container">
      <div className="fact-box">
        <h4>Rotation Time</h4>
        <h2>{planetInfo.rotation}</h2>
      </div>
      <div className="fact-box">
        <h4>REVOLUTION TIME</h4>
        <h2>{planetInfo.revolution}</h2>
      </div>
      <div className="fact-box">
        <h4>radius</h4>
        <h2>{planetInfo.radius}</h2>
      </div>
      <div className="fact-box">
        <h4>AVERAGE TEMP.</h4>
        <h2>{planetInfo.temp}</h2>
      </div>
    </div>
  );
};

export default Facts;
