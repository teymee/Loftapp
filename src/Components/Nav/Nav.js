import React from "react";
import Logo from "../../assets/Logo.svg";

import './nav.css'

function Nav() {
	return (
		<div className="nav">
			<img src={Logo} alt="Logo" />
		</div>
	);
}

export default Nav;
