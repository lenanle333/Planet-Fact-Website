import React from "react";
import { NavLink } from "react-router-dom";
const Links = ({ planet, isActiveLink, handleActiveLinkClick }) => {
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
