import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav className="navbar navbar-expand-sm bg-dark">
			<ul className="navbar-nav mx-auto">
				<li className="nav-item">
					<NavLink to="/" className="nav-link text-light">
						홈
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/wordrelay" className="nav-link text-light">
						끝말잇기
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
