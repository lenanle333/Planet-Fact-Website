import React from "react";
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "../assets/PlanetImages";
import PageBtns from "./PageBtns";
import Facts from "./Facts";
import iconSrc from "../assets/icon-source.svg";
import "../style/PlanetPages.css";

const Overview = ({ planet }) => {
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
  const planetImages = {
    Mercury: Mercury,
    Venus: Venus,
    Earth: Earth,
    Mars: Mars,
    Jupiter: Jupiter,
    Saturn: Saturn,
    Uranus: Uranus,
    Neptune: Neptune,
  };
  const planetInfo = {
    overview: {
      content: "",
      source: "",
    },
  };

  const handleData = () => {
    const data = require("../data.json");
    const currPlanet = planets[planet];

    planetInfo.overview.content = data.planets[currPlanet].overview.content;
    planetInfo.overview.source = data.planets[currPlanet].overview.source;
  };
  handleData();

  return (
    <div>
      <div className="main-container">
        <div className="img-container">
          <img src={planetImages[planet]} alt={planet} />
        </div>
        <div className="info-container">
          <h1>{planet}</h1>
          <p>{planetInfo.overview.content}</p>
          <div id="source">
            <p id="source-text">
              Source: <a href={planetInfo.overview.source}>Wikipedia</a>
            </p>
            <img src={iconSrc} alt="" />
          </div>
          <PageBtns planet={planet} page="Overview" />
        </div>
      </div>
      <Facts planet={planet} />
    </div>
  );
};

export default Overview;
