import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Location from "../../pages/Location"

const Nav = () =>
<Router>
<div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <a className="navbar-brand" href="#">Navbar</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNav" className="navbarletter">
		    <ul className="navbar-nav">
		      <li activeClassName="nav-item">
		        <Link to="/Home" className="nav-link" activeClassName="nav-link active">Home</Link>
		      </li>
		      <li activeClassName="nav-item">
		        <Link to='/Menu' className="nav-link" activeClassName="nav-link active">Menu</Link>
		      </li>
		      <li activeClassName="nav-item">
		        <Link to='/Location' className="nav-link" activeClassName="nav-link active">Location</Link>
		      </li>
		    </ul>
		  </div>
		</nav>
		<div className="content">
		<Route exact path='/Home' component={Home} />
		<Route exact path='/Menu' component={Menu} />
        <Route exact path='/Location' component={Location} />
        </div>
        </div>
</Router>
export default Nav;