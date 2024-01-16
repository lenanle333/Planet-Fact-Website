import React, { useState, useEffect } from "react";
import Links from "./Links";
import "../style/Navigation.css";

const Navigation = ({ activeLink, setActiveLink }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const data = require("../data.json");
    setPlanets(data.planets);
  }, []);

  return (
    <>
      <nav>
        <p className="logo">The Planets</p>
        <div className="nav-links">
          {planets.map((planet, index) => (
            <Links
              key={index}
              planet={planet.name}
              isActiveLink={activeLink}
              handleActiveLinkClick={() => setActiveLink(planet.name)}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
