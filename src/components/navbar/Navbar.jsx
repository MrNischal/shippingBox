import React from "react";
import { Link } from "react-router-dom";
import { NAV_LIST } from "../../util/constant";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className='Navbar'>
			{NAV_LIST.map((navItem, index) => {
				return (
					<Link to={navItem.path} key={index}>
						<span>{navItem.title}</span>
					</Link>
				);
			})}
		</nav>
	);
};

export default Navbar;
