import React from "react";

import Arrow from '../../assets/arrow.svg'
import Phones from '../../assets/phones.png'
import './header.css'

function Header() {
	return (
		<>
			<section className="banner ">
				<div className="banner-text">
					<h1>Managing your <br/> Estates just got 10x <br/> easier with Loft.</h1>
					<p>A free multiplatform residential estate management <br/> software.</p>
                              <button>Get early access <img src={Arrow} alt="arrow"/> </button>
				</div>

				<div  className="banner-img"><img src={Phones} alt="phone"/></div>
			</section>
		</>
	);
}

export default Header;
