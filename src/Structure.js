import React from "react";
import PlanetPage from "./components/PlanetPage";
import {
  MercuryInternal,
  VenusInternal,
  EarthInternal,
  MarsInternal,
  JupiterInternal,
  SaturnInternal,
  UranusInternal,
  NeptuneInternal,
} from "./assets/";

const Structure = ({ planet, planetIndex }) => {
  const images = {
    Mercury: MercuryInternal,
    Venus: VenusInternal,
    Earth: EarthInternal,
    Mars: MarsInternal,
    Jupiter: JupiterInternal,
    Saturn: SaturnInternal,
    Uranus: UranusInternal,
    Neptune: NeptuneInternal,
  };

  return (
    <PlanetPage
      planetIndex={planetIndex}
      planet={planet}
      planetImage={images[planet]}
      geologyImage=""
      page="Structure"
    />
  );
};

export default Structure;
