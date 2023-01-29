import React from "react";
// import { useHistory, Link } from "react-router-dom";

function Navigation() {
	return (
		<div>
			<nav className='nav'>
				<a href='/'>Home</a>
				<a href='/about'>about</a>
				<a href='/profile'>profile</a>
				<a href='/blog'>Blog</a>
			</nav>
		</div>
	);
}

export default Navigation;
