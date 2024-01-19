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
} from "./assets";
import PlanetPage from "./components/PlanetPage";

const Overview = ({ planet }) => {
  const images = {
    Mercury: Mercury,
    Venus: Venus,
    Earth: Earth,
    Mars: Mars,
    Jupiter: Jupiter,
    Saturn: Saturn,
    Uranus: Uranus,
    Neptune: Neptune,
  };

  return (
    <PlanetPage
      planet={planet}
      planetImage={images[planet]}
      geologyImage=""
      page="Overview"
    />
  );
};

export default Overview;
