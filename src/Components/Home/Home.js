import React from "react";
import { Link } from "react-router-dom";
import picture from "./promy.png";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="title">
				<span>
					<h2>Hey there,</h2>
					<h1>I am Sunjida Promy</h1>
					<h4>Front-end Developer</h4>
				</span>
				<Link to="/about">
					<button>More about me</button>
				</Link><br/>
				<button><a href="https://drive.google.com/file/d/1Vqh29X8Z9Xfjje4tl32NHz7Tsa5XH81k/view?usp=sharing">Download Resume</a></button>
			</div>
			<div className="person">
				<img style={{height:'350px', width:'350px', marginLeft:'30%'}} src={picture} alt="person profile pic" />
			</div>
		</div>
	);
};

export default Home;