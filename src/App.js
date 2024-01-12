import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import Structure from "./components/Structure";
import "./style/App.css";

const App = () => {
  const [planet, setPlanet] = useState("Mercury");
  useEffect(() => {
    const data = require("./data.json");
    setPlanet(data.planets.find((p) => p.name === planet));
  }, []);
  return (
    <div className="page">
      <Navigation activeLink={planet} setActiveLink={setPlanet} />
      <Routes>
        <Route path="/" element={<Overview planet={planet} />} />
        <Route path="/Overview" element={<Overview planet={planet} />} />
        <Route path="/Structure" element={<Structure planet={planet} />} />
      </Routes>
    </div>
  );
};

export default App;
