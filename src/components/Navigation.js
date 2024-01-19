import React, { useState, useEffect, useRef } from "react";
import Links from "./Links";
import "../style/Navigation.css";
import NavIcon from "../assets/icon-hamburger.svg";

const Navigation = ({ activeLink, setActiveLink, toggleNavMenu }) => {
  const [planets, setPlanets] = useState([]);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const navRef = useRef();

  const showNavMenu = () => {
    navRef.current.classList.toggle("resp-nav");
  };
  useEffect(() => {
    const data = require("../data.json");
    setPlanets(data.planets);
  }, []);
  return (
    <>
      <nav ref={navRef}>
        <div className={navbarToggle === true ? "resp-overlay" : "overlay"}>
          <p className="logo">The Planets</p>
          <button
            className="nav-menu"
            onClick={() => {
              showNavMenu();
              setNavbarToggle(!navbarToggle);
            }}
          >
            <img src={NavIcon} />
          </button>
        </div>
        <div className={navbarToggle === true ? "resp-links" : "nav-links"}>
          {planets.map((planet, index) => (
            <Links
              key={index}
              planet={planet.name}
              isActiveLink={activeLink}
              handleActiveLinkClick={() => setActiveLink(planet.name)}
              toggleNavMenu={() => {
                showNavMenu();
                setNavbarToggle(!navbarToggle);
              }}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
