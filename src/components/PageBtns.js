import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/PageBtns.css";
const PageBtns = ({ planet, page }) => {
	const [isActivePage, handleActivePage] = useState(page);
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 420;
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
	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	// Mobile View
	if (width < breakpoint) {
		return (
			<div className="btn-containers">
				<Link to="/">
					<button
						style={{
							borderBottom:
								isActivePage === "Overview"
									? `4px solid ${colors[planet]}`
									: "none",
						}}
						className="overview"
						onClick={() => handleActivePage("Overview")}
					>
						<div
							className="btn-title"
							style={{
								color:
									isActivePage === "Overview"
										? "hsla(0,0%,100%,1)"
										: "hsla(0,0%,100%,0.5)",
							}}
						>
							Overview
						</div>
					</button>
				</Link>
				<Link to="/Structure">
					<button
						style={{
							borderBottom:
								isActivePage === "Structure"
									? `4px solid ${colors[planet]}`
									: "none",
						}}
						className="structure"
						onClick={() => handleActivePage("Structure")}
					>
						<div
							className="btn-title"
							style={{
								color:
									isActivePage === "Structure"
										? "hsla(0,0%,100%,1)"
										: "hsla(0,0%,100%,0.5)",
							}}
						>
							Structure
						</div>
					</button>
				</Link>
				<Link to="/Geology">
					<button
						style={{
							borderBottom:
								isActivePage === "Geology"
									? `4px solid ${colors[planet]}`
									: "none",
						}}
						className="geology"
						onClick={() => handleActivePage("Geology")}
					>
						<div
							className="btn-title"
							style={{
								color:
									isActivePage === "Geology"
										? "hsla(0,0%,100%,1)"
										: "hsla(0,0%,100%,0.5)",
							}}
						>
							Surface
						</div>
					</button>
				</Link>
			</div>
		);
	}

	return (
		<div className="btn-containers">
			<Link to="/">
				<button
					style={{
						backgroundColor: isActivePage === "Overview" ? colors[planet] : "",
						border:
							isActivePage === "Overview"
								? "none"
								: "1px solid hsla(0, 0%, 100%, 0.2)",
					}}
					className="overview"
					onClick={() => handleActivePage("Overview")}
				>
					<div className="btn-num">01</div>
					<div className="btn-title">Overview</div>
				</button>
			</Link>
			<Link to="/Structure">
				<button
					style={{
						backgroundColor: isActivePage === "Structure" ? colors[planet] : "",
						border:
							isActivePage === "Structure"
								? "none"
								: "1px solid hsla(0, 0%, 100%, 0.2)",
					}}
					className="structure"
					onClick={() => handleActivePage("Structure")}
				>
					<div className="btn-num">02</div>
					<div className="btn-title">Internal Structure</div>
				</button>
			</Link>
			<Link to="/Geology">
				<button
					style={{
						backgroundColor: isActivePage === "Geology" ? colors[planet] : "",
						border:
							isActivePage === "Geology"
								? "none"
								: "1px solid hsla(0, 0%, 100%, 0.2)",
					}}
					className="geology"
					onClick={() => handleActivePage("Geology")}
				>
					<div className="btn-num">03</div>
					<div className="btn-title">Surface Geology</div>
				</button>
			</Link>
		</div>
	);
};

export default PageBtns;
