import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className="skills about">
			<div className="content">
				<div className="section">
					<h2 className="section-header">Summary</h2>
					<p>
						I am a graduated student with an innate interest in
						problem-solving with algorithms and a passion for frontend
						development. I've done BSc in Computer Science and Technology.
					</p>
				</div>
			</div>
			<br/>
			<div className="section">
				<h2 className="section-header">Skills</h2>
				<i className="fab fa-html5 fa-5x"></i>
				<i className="fab fa-css3 fa-5x"></i>
				<i className="fab fa-bootstrap fa-5x"></i>
				<i className="fab fa-node-js fa-5x"></i>
				<i className="fab fa-react fa-5x"></i>
				<i className="fas fa-database fa-5x"></i>
				<i className="fab fa-github fa-5x"></i>
			</div>
		</div>
	);
};

export default About;