import React from "react";
import "./Education.css";

const About = () => {
	return (
		<div className="education-container">
			<div className="education-section"><br/>
				<h1>Undergraduate | 2017-2020 </h1>
				<h3>International University of Business Agriculture and Technology, Uttara | 3.71 CGPA</h3>
				<h5>BSc | Computer Science and Engineering</h5>
				<ul>
					<li>
						member of IUBAT IT Society 
					</li>
					<li>
						volunteered in NCPC- National Collegiate Programming Contest.
					</li>
				</ul>
			</div>
			<div className="education-section">
				<h1>HSC | 2014-2016 </h1>
				<h3>Govt. City College, Chittagong | 4.67 out of 5</h3>
				<ul>
					<li>member of Debate Society.</li>
				</ul>
			</div>
			<div className="education-section">
				<h1>SSC | 2004-2014 </h1>
				<h3>A.K High School, Dhaka | 4.67 out of 5</h3>
				<ul>
					<li>
						wrote various articles for school magazines.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;