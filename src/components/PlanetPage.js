import React from "react";
import PageBtns from "./PageBtns";
import Facts from "./Facts";
import SrcIcon from "../assets/icon-source.svg";
import "../style/PlanetPage.css";
const PlanetPage = ({ planet, planetImage, geologyImage, page }) => {
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
    content: "",
    source: "",
  };

  const data = require("../data.json");
  let planetIndex = planets[planet];
  if (page === "Overview") {
    planetInfo.content = data.planets[planetIndex].overview.content;
    planetInfo.source = data.planets[planetIndex].overview.source;
  } else if (page === "Structure") {
    planetInfo.content = data.planets[planetIndex].structure.content;
    planetInfo.source = data.planets[planetIndex].structure.source;
  } else {
    planetInfo.content = data.planets[planetIndex].geology.content;
    planetInfo.source = data.planets[planetIndex].geology.source;
  }

  return (
    <div className="planet-page">
      <div className="main-container">
        <div className="img-container">
          <img id="planet-img" src={planetImage} alt={planet} />
          <img
            id={geologyImage === "" ? "no-img" : "geology-img"}
            src={geologyImage}
          />
        </div>
        <div className="info-container">
          <div className="info-section">
            <h1>{planet}</h1>
            <p>{planetInfo.content}</p>
            <div id="source">
              <p id="source-text">
                Source: <a href={planetInfo.source}>Wikipedia</a>
              </p>
              <img src={SrcIcon} alt="" />
            </div>
          </div>
          <PageBtns planet={planet} page={page} />
        </div>
      </div>
      <Facts planet={planet} />
    </div>
  );
};

export default PlanetPage;
