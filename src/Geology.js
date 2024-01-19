import React from "react";
import PlanetPage from "./components/PlanetPage";
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  MercuryGeology,
  VenusGeology,
  EarthGeology,
  MarsGeology,
  JupiterGeology,
  SaturnGeology,
  UranusGeology,
  NeptuneGeology,
} from "./assets";

const Geology = ({ planet }) => {
  const images = {
    Mercury: { planet: Mercury, geology: MercuryGeology },
    Venus: { planet: Venus, geology: VenusGeology },
    Earth: { planet: Earth, geology: EarthGeology },
    Mars: { planet: Mars, geology: MarsGeology },
    Jupiter: { planet: Jupiter, geology: JupiterGeology },
    Saturn: { planet: Saturn, geology: SaturnGeology },
    Uranus: { planet: Uranus, geology: UranusGeology },
    Neptune: { planet: Neptune, geology: NeptuneGeology },
  };

  return (
    <PlanetPage
      planet={planet}
      planetImage={images[planet].planet}
      geologyImage={images[planet].geology}
      page="Geology"
    />
  );
};

export default Geology;
