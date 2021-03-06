import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [screenWidth, setScreenWidth] = useState(0);
	const location = useLocation();

	const trackScreenWidth = () => {
		const width = window.innerWidth;
		setScreenWidth(width);
		if (width > 600) {
			setOpen(true);
		}
	};

	const handleClose = () => {
		if (screenWidth < 600) {
			setOpen(false);
		}
	};

	useEffect(() => {
		trackScreenWidth();
		window.addEventListener("resize", trackScreenWidth);
		return () => window.removeEventListener("resize", trackScreenWidth);
	}, []);

	return (
		<nav className="navbar">
			<div className="nav-wrapper">
				<div className="logo navbar-brand">
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: location.pathname === "/" && "#4071f4",
							fontSize: "28px",
							fontWeight: "bold",
						}}
					>
						HOME
					</Link>
				</div>
				<div className="list-wrapper">
					<img
						src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
						alt="Menu bars"
						style={{ opacity: !open ? 1 : 0 }}
						onClick={() => {
							setOpen(!open);
						}}
					/>
					<img
						src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
						alt="Menu cross"
						style={{ opacity: open ? 1 : 0 }}
						onClick={() => {
							setOpen(!open);
						}}
					/>

					<ul style={{ left: open ? "0" : "-100vw" }}>
						<li>
							<Link
								to="/about"
								onClick={handleClose}
								style={{
									color: location.pathname === "/about" && "#4071f4",
								}}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/projects"
								onClick={handleClose}
								style={{
									color: location.pathname === "/projects" && "#4071f4",
								}}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="/education"
								onClick={handleClose}
								style={{
									color: location.pathname === "/education" && "#4071f4",
								}}
							>
								Education
							</Link>
						</li>
						<li>
							<Link
								to="/experience"
								onClick={handleClose}
								style={{
									color: location.pathname === "/experience" && "#4071f4",
								}}
							>
								Experience
							</Link>
						</li>
						<li>
							<Link
								to="/blog"
								onClick={handleClose}
								style={{
									color: location.pathname === "/blog" && "#4071f4",
								}}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								onClick={handleClose}
								style={{
									color: location.pathname === "/contact" && "#4071f4",
								}}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;