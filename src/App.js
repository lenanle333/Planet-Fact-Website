import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Overview from "./Overview";
import Structure from "./Structure";
import Geology from "./Geology";
import "./style/App.css";

const App = () => {
  const [planet, setPlanet] = useState("Mercury");
  let planetIndex = 0;
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
  useEffect(() => {
    const data = require("./data.json");
    planetIndex = planets[planet];
    setPlanet(data.planets[planetIndex].name);
  }, []);

  return (
    <>
      <Navigation activeLink={planet} setActiveLink={setPlanet} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Overview planet={planet} planetIndex={planetIndex} />}
          />
          <Route
            path="/Structure"
            element={<Structure planet={planet} planetIndex={planetIndex} />}
          />
          <Route
            path="/Geology"
            element={<Geology planet={planet} planetIndex={planetIndex} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
