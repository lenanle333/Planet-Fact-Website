import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Chevron from "../assets/icon-chevron.svg";

const Links = ({
  planet,
  isActiveLink,
  handleActiveLinkClick,
  toggleNavMenu,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const desktopBreakpoint = 1024;
  const mobileBreakpoint = 420;
  const colors = {
    Mercury: "hsla(194, 48%, 49%, 1)",
    Venus: "hsla(33, 82%, 61%, 1)",
    Earth: "hsla(263, 66%, 51%, 1)",
    Mars: "hsla(10, 63%, 51%, 1)",
    Jupiter: "hsla(2, 68%, 53%, 1)",
    Saturn: "hsla(17, 73%, 46%, 1)",
    Uranus: "hsla(168, 73%, 44%, 1)",
    Neptune: "hsla(222, 87%, 56%, 1)",
  };
  const ovalColors = {
    Mercury: "hsla(196, 83%, 93%, 1)",
    Venus: "hsla(39, 88%, 73%, 1)",
    Earth: "hsla(238, 99%, 66%, 1)",
    Mars: "hsla(12, 100%, 64%, 1)",
    Jupiter: "hsla(27, 75%, 70%, 1)",
    Saturn: "hsla(40, 96%, 70%, 1)",
    Uranus: "hsla(168, 82%, 67%, 1)",
    Neptune: "hsla(222, 95%, 63%, 1)",
  };
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width < mobileBreakpoint) {
    return (
      <div id="link-container">
        <NavLink
          to="/"
          className={isActiveLink === planet ? "link-active" : "link"}
          onClick={() => {
            handleActiveLinkClick();
            toggleNavMenu();
          }}
        >
          <div id="oval" style={{ background: `${ovalColors[planet]}` }} />
          {planet}
          <img id="arrow" src={Chevron} />
        </NavLink>
      </div>
    );
  } else if (width < desktopBreakpoint) {
    return (
      <div
        id="link-container"
        style={{
          borderBottom:
            isActiveLink === planet ? `4px solid ${colors[planet]}` : "none",
        }}
      >
        <NavLink
          to="/"
          className={isActiveLink === planet ? "link-active" : "link"}
          onClick={() => handleActiveLinkClick()}
        >
          {planet}
        </NavLink>
      </div>
    );
  }
  return (
    <div
      id="link-container"
      style={{
        borderTop:
          isActiveLink === planet ? `4px solid ${colors[planet]}` : "none",
      }}
    >
      <NavLink
        to="/"
        className={isActiveLink === planet ? "link-active" : "link"}
        onClick={() => handleActiveLinkClick()}
      >
        {planet}
      </NavLink>
    </div>
  );
};

export default Links;
