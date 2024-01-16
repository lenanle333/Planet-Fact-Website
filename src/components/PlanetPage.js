import React, { useEffect } from "react";
import PageBtns from "./PageBtns";
import Facts from "./Facts";
import iconSrc from "../assets/icon-source.svg";
import "../style/PlanetPages.css";
const PlanetPage = ({
  planetIndex,
  planet,
  planetImage,
  geologyImage,
  page,
}) => {
  const planetInfo = {
    content: "",
    source: "",
  };
  const handleData = () => {
    const data = require("../data.json");

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
  };
  handleData();
  return (
    <div className="planet-page">
      <div className="main-container">
        <div className="img-container">
          <img src={planetImage} alt={planet} />
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
              <img src={iconSrc} alt="" />
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
