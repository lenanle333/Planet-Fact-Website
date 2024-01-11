import React, { useState, useEffect } from "react";
import planetImg from "./assets/planet-mercury.svg";
import iconSrc from "./assets/icon-source.svg";
import "./style/PlanetPages.css";

const Mercury = () => {
  const planetInfo = {
    name: "Mercury",
    overview: {
      content: "",
      source: "",
    },
  };
  const handleData = () => {
    const data = require("./data.json");
    planetInfo.overview.content = data.planets[0].overview.content;
    planetInfo.overview.source = data.planets[0].overview.source;
  };
  handleData();
  return (
    <>
      <h1>{planetInfo.name}</h1>
      <img src={planetImg} alt="" />
      <p>{planetInfo.overview.content}</p>
      <div id="source">
        <p id="source-text">
          Source: <a href={planetInfo.overview.source}>Wikipedia</a>
        </p>
        <img src={iconSrc} alt="" />
      </div>
      <div className="btn-containers">
        <button type="">
          <h3 id="btn-num">01</h3>
          <h3 id="btn-title">Overview</h3>
        </button>
        <button type="">
          <h3 id="btn-num">02</h3>
          <h3 id="btn-title">Internal Structure</h3>
        </button>
        <button type="">
          <h3 id="btn-num">03</h3>
          <h3 id="btn-title">Surface Geology</h3>
        </button>
      </div>
    </>
  );
};
export default Mercury;
