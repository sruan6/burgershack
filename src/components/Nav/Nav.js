import React, { Component } from 'react';

const Nav = () =>
<nav>
	<div className='row'>
		<div className='col-sm-12 col-md-6'>
		<h1>Burger Shack</h1>
		{/*navBar Logo*/}
		{/* <img src='#'/> */}
		</div>
		<div className='col-sm-12 col-md-6'>
			<ul>
				<li>
					<a href='/Home'>Home</a>
				</li>
				<li>
					<a href='/Menu'>Menu</a>
				</li>
				<li>
					<a href='/Location'>Location</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

export default Nav;