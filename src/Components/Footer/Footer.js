import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<a
				href="https://www.linkedin.com/in/sanjida-promy-0856aa18a/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="icons fab fa-linkedin fa-2x"></i>
			</a>
			<a href="https://github.com/sanjida4" target="_blank" rel="noreferrer">
				<i className="icons fab fa-github fa-2x"></i>
			</a>
			<a href="mailto:sunjida.promy@gmail.com" target="_blank" rel="noreferrer">
				<i className="icons fas fa-envelope fa-2x"></i>
			</a>
			<a href="tel:+8801516706237" target="_blank" rel="noreferrer">
				<i className="icons fas fa-phone-square-alt fa-2x"></i>
			</a>
		</footer>
	);
};

export default Footer;