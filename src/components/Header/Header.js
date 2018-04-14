import React from 'react';
import './Header.css';

const Header = props => (
	<div>
		<nav className='navbar'>
			<ul className="container">
				<li>Simpson's Memory Test</li>
				<li>Github</li>
				<li>Score: {props.newScore}</li>
				<li>High Score: {props.topScore}</li>
			</ul>
		</nav>
	</div>
);

export default Header;
