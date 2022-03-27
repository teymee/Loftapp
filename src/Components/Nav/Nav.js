import React from "react";
import Logo from "../../assets/logo.png";

import './nav.css'

function Nav() {
	return (
		<div className="nav">
			<div></div>
			<img src={Logo} alt="Logo" />
                  <span>LOFT</span>
		</div>
	);
}

export default Nav;
