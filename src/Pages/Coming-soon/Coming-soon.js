import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Subsection from "../../Components/Subsection/Subsection";

import "./coming_soon.css";

function Soon() {
	return (
		<div className="soon">
			<div className="container">
				<Nav />
				<Header />
			</div>
			<Subsection/>
			<Footer/>
		</div>
	);
}

export default Soon;
