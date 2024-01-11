import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./style/App.css";
import Mercury from "./Mercury";

const App = () => {
  const [planet, setPlanet] = useState("");
  useEffect(() => {
    const data = require("./data.json");
    setPlanet(data.planets.find((p) => p.name === planet));
  }, []);

  return (
    <div className="page">
      <Navigation activeLink={planet} setActiveLink={setPlanet} />

      <Routes>
        <Route path="/Mercury" element={<Mercury />} />
        {/* {planets.map((planet) => (
          <Route
            key={planet}
            path={`/${planet.name}`}
            element={<PlanetPages planet={planet.name} />}
          />
        ))} */}
      </Routes>
    </div>
  );
};

export default App;
