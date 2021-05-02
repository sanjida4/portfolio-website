import React from "react";
import "./Projects.css";
import makeMyTrip from "./makeMyTrip.JPG";
import birdBox from "./birdBox.JPG";
import findRiders from "./find-riders.JPG";
import cookingMaster from "./cooking-master.JPG";
import sports from "./sports-league.JPG";

const Projects = () => {
	return (
		<div className="container">
			<main className="grid">
				<article className="card">
					<img src={makeMyTrip} alt="" />
					<div className="text">
						<h2>Make My Trip</h2>
						<p className="project-description">
							A web app that lets users search for tours they want to travel and book for the tours. <br/> Built with <strong>React, </strong>
							<strong>Hooks</strong>, <strong>React router</strong>, <strong>javascript</strong>, <strong>Firebase</strong> and <strong>mongoDB</strong>. It also has a demo payment
							feature that uses the <strong>Google Pay integration</strong> for
							React.
						</p>
						<a
							href="https://make-my-trip-38aa0.web.app/"
							target="_blank"
							rel="noreferrer"
							style={{ color: "blue", textDecoration: "none" }}
						>
							Live link
						</a>
						<a
							href="https://github.com/sanjida4/make-my-trip-client"
							target="_blank"
							rel="noreferrer"
							style={{
								color: "blue",
								textDecoration: "none",
								marginLeft: "20px",
							}}
						>
							Code Repository
						</a>
					</div>
				</article>
				<article className="card">
					<img src={birdBox} alt="" />
					<div className="text">
						<h2>Bird Box</h2>
						<p className="project-description">
							An e-commerce site for buying birds. <br/> Built with <strong>React, </strong>
							<strong>Hooks</strong>, <strong>React router</strong>, <strong>javascript</strong>, <strong>Firebase</strong> and <strong>mongoDB</strong>. 
						</p>
						<a
							href="https://bird-box-f16a6.web.app/"
							target="_blank"
							rel="noreferrer"
							style={{ color: "blue", textDecoration: "none" }}
						>
							Live link
						</a>
						<a
							href="https://github.com/sanjida4/birdBox-client"
							target="_blank"
							rel="noreferrer"
							style={{
								color: "blue",
								textDecoration: "none",
								marginLeft: "20px",
							}}
						>
							Code Repository
						</a>
					</div>
				</article>
				<article className="card">
					<img src={findRiders} alt="" />
					<div className="text" style={{ marginTop: "13px" }}>
						<h2>Find Riders</h2>
						<p className="project-description">
							An web app that lets user to find a suitable ride for any particular destination. Built with <strong>React</strong>,<strong>Hooks</strong>, <strong>React router</strong>, <strong>javascript</strong> and <strong>Firebase</strong>. 
						</p>
						<a
							href="https://find-riders.web.app/"
							target="_blank"
							rel="noreferrer"
							style={{ color: "blue", textDecoration: "none" }}
						>
							Live link
						</a>
						<a
							href="https://github.com/sanjida4/Find-Riders"
							target="_blank"
							rel="noreferrer"
							style={{
								color: "blue",
								textDecoration: "none",
								marginLeft: "20px",
							}}
						>
							Code Repository
						</a>
					</div>
				</article>
				<article className="card">
					<img src={cookingMaster} alt="" />
					<div className="text" style={{ marginTop: "13px" }}>
						<h2>Cooking Master</h2>
						<p className="project-description">
							A website to find out foods from API by searching. Built with <strong>Javascript</strong>. An <strong> API</strong> is also used to load the food items in the site.
						</p>
						<a
							href="https://sanjida4.github.io/hungryMonster/"
							target="_blank"
							rel="noreferrer"
							style={{ color: "blue", textDecoration: "none" }}
						>
							Live link
						</a>
						<a
							href="https://github.com/sanjida4/hungryMonster"
							target="_blank"
							rel="noreferrer"
							style={{
								color: "blue",
								textDecoration: "none",
								marginLeft: "20px",
							}}
						>
							Code Repository
						</a>
					</div>
				</article>
				<article className="card">
					<img src={sports} alt="" />
					<div className="text" style={{ marginTop: "13px" }}>
						<h2>Sports League</h2>
						<p className="project-description">
							A website to find out about football leagues and get update data about the leagues by connecting through social media like YouTube, Facebook and Twitter. Built with <strong>React</strong>,{" "}
							<strong>React router</strong> and <strong>javascript</strong>.
						</p>
						<a
							href="https://6049a017e5773b2866ae6137--stoic-jackson-952869.netlify.app/id/4328"
							target="_blank"
							rel="noreferrer"
							style={{ color: "blue", textDecoration: "none" }}
						>
							Live link
						</a>
						<a
							href="https://github.com/sanjida4/Sports-League"
							target="_blank"
							rel="noreferrer"
							style={{
								color: "blue",
								textDecoration: "none",
								marginLeft: "20px",
							}}
						>
							Code Repository
						</a>
					</div>
				</article>
			</main>
		</div>
	);
};

export default Projects;