import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Location from "../../pages/Location"

const Nav = () =>
<Router>
	<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="#">Burger Shack</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div className="navbar-nav">
		      <Link className="nav-item nav-link" activeclassName="nav-item nav-link active" to="/">Home</Link>
		      <Link className="nav-item nav-link" activeclassName="nav-item nav-link active" to="/Menu">Menu</Link>
		      <Link className="nav-item nav-link" activeclassName="nav-item nav-link active" to="/Location">Location</Link>
		    </div>
		  </div>
		</nav>
		<Route exact path='/Home' component={Home} />
		<Route exact path='/Menu' component={Menu} />
        <Route exact path='/Location' component={Location} />
    </div>
</Router>
export default Nav;