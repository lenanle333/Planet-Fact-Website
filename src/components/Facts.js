import React from "react";
import "../style/Facts.css";
const Facts = ({ planet }) => {
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
	const planetInfo = {
		rotation: "",
		revolution: "",
		radius: "",
		temp: "",
	};

	const handleData = () => {
		const data = require("../data.json");
		const currPlanet = planets[planet];
		planetInfo.rotation = data.planets[currPlanet].rotation;
		planetInfo.revolution = data.planets[currPlanet].revolution;
		planetInfo.radius = data.planets[currPlanet].radius;
		planetInfo.temp = data.planets[currPlanet].temperature;
	};
	handleData();
	return (
		<div className="fact-container">
			<section aria-label="rotation time fact" className="fact-box">
				<h1 className="fact-header">Rotation Time</h1>
				<h2 className="fact-info">{planetInfo.rotation}</h2>
			</section>
			<section aria-label="revolution time fact" className="fact-box">
				<h1 className="fact-header">REVOLUTION TIME</h1>
				<h2 className="fact-info">{planetInfo.revolution}</h2>
			</section>
			<section aria-label="radius fact" className="fact-box">
				<h1 className="fact-header">radius</h1>
				<h2 className="fact-info">{planetInfo.radius}</h2>
			</section>
			<section aria-label="average temperature fact" className="fact-box">
				<h1 className="fact-header">AVERAGE TEMP.</h1>
				<h2 className="fact-info">{planetInfo.temp}</h2>
			</section>
		</div>
	);
};

export default Facts;
