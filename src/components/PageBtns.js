import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/PageBtns.css";
const PageBtns = ({ planet, page }) => {
  const [isActivePage, handleActivePage] = useState(page);
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
    <div className="btn-containers">
      <Link to="/">
        <button
          style={{
            backgroundColor: isActivePage === "Overview" ? colors[planet] : "",
          }}
          className="overview"
          onClick={() => handleActivePage("Overview")}
        >
          <h3 id="btn-num">01</h3>
          <h3 id="btn-title">Overview</h3>
        </button>
      </Link>
      <Link to="/Structure">
        <button
          style={{
            backgroundColor: isActivePage === "Structure" ? colors[planet] : "",
          }}
          className="structure"
          onClick={() => handleActivePage("Structure")}
        >
          <h3 id="btn-num">02</h3>
          <h3 id="btn-title">Internal Structure</h3>
        </button>
      </Link>
      <Link to="/Geology">
        <button
          style={{
            backgroundColor: isActivePage === "Geology" ? colors[planet] : "",
          }}
          className="geology"
          onClick={() => handleActivePage("Geology")}
        >
          <h3 id="btn-num">03</h3>
          <h3 id="btn-title">Surface Geology</h3>
        </button>
      </Link>
    </div>
  );
};

export default PageBtns;
