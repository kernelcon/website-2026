import React from "react";
import { withRouter } from "react-router-dom";
import KillerLogo from "../../static/images/logos/kernelcon_white.png";
import "./NavBar.scss";

const NavBar = ({ location }) => {
	const isHomeRoute = location.pathname === "/";
	
	return (
		<div className={`navbar ${isHomeRoute ? 'navbar-transparent' : 'navbar-dark'}`}>
			<div className="container">
				<a href="/">
					<img
						src={KillerLogo}
						className="navbar-logo-k25"
						height="30"
						alt="kernelcon logo"
					/>
					
					<p className="nav-dates">Training: Apr 7-8</p>
					<p className="second-nav-dates">Conference: Apr 9-10</p>
				</a>
			</div>
		</div>
	);
};

export default withRouter(NavBar);
