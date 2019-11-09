import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand" href="/">Cadoc's Page</a>
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
	        		<Link to="/books">Books</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
