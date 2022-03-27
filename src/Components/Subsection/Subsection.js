import React from "react";

import Demo from "../../assets/demo.svg";
import Colors from "../../assets/colors.png";
import Waves from "../../assets/waves.svg";

import "./subsection.css";

function Subsection() {
	return (
		<section className="subsection">
			<img src={Colors} alt="design" className="design" />
                  <img src={Waves} alt="design" className="design2" />
			<div className="container">
				<h1>How Loft Works</h1>
				<p>Contact us for a demo</p>
				<img src={Demo} alt="demo" />
			</div>
                  
		</section>
	);
}

export default Subsection;
