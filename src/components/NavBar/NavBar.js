import React, { Component } from "react";
import KillerLogo from "../../static/images/logos/kernelcon_white.png";
import "./NavBar.scss";
export default class NavBar extends Component {
	static displayName = "NavBar";

	render() {
		return (
			<div className="navbar">
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
	}
}
