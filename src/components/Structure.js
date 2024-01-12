import React from "react";
import PageBtns from "./PageBtns";
import Facts from "./Facts";
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "../assets/StructureImages";
import iconSrc from "../assets/icon-source.svg";
import "../style/PlanetPages.css";
const Structure = ({ planet }) => {
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
    structure: {
      content: "",
      source: "",
    },
  };

  const handleData = () => {
    const data = require("../data.json");
    const currPlanet = planets[planet];

    planetInfo.structure.content = data.planets[currPlanet].structure.content;
    planetInfo.structure.source = data.planets[currPlanet].structure.source;
  };
  handleData();
  console.log(planet);
  return (
    <div>
      <div className="main-container">
        <div className="img-container">
          <img src={planetImages[planet]} alt={planet} />
        </div>
        <div className="info-container">
          <h1>{planet}</h1>
          <p>{planetInfo.structure.content}</p>
          <div id="source">
            <p id="source-text">
              Source: <a href={planetInfo.structure.source}>Wikipedia</a>
            </p>
            <img src={iconSrc} alt="" />
          </div>
          <PageBtns planet={planet} page="Structure" />
        </div>
      </div>
      <Facts planet={planet} />
    </div>
  );
};

export default Structure;
