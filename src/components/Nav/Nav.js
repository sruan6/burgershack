import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Location from "../../pages/Location"

class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			myopen : '<i className="fas fa-bars"></i>'
		}
		this.handleOpen = this.handleOpen.bind(this)
	}
	handleOpen() {
	this.setState({ myopen: !this.state.myopen });
	}

	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light">
					  <a className="navbar-brand logo" href="/Home">Burger Shack</a>
					  <button className="navbar-toggler" onClick={this.handleOpen} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					  <ReactCSSTransitionGroup
				          transitionName="example"
				          transitionEnterTimeout={100}
				          transitionLeaveTimeout={100}>
					     {this.state.myopen ? 
					     	<i className="fas fa-bars"></i>:<i className="fas fa-times"></i>}
					   </ReactCSSTransitionGroup>
					   	</button>

					  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					    <div className="navbar-nav">
					      <NavLink className="nav-item nav-link" activeClassName="nav-item nav-link active" to="/Home">Home</NavLink>
					      <NavLink className="nav-item nav-link" activeClassName="nav-item nav-link active" to="/Menu">Menu</NavLink>
					      <NavLink className="nav-item nav-link" activeClassName="nav-item nav-link active" to="/Location">Location</NavLink>
					    </div>
					  </div>
					</nav>
					<Route exact path='/Home' component={Home} />
					<Route exact path='/Menu' component={Menu} />
			        <Route exact path='/Location' component={Location} />
			    </div>
			</Router>
			)
		}
}
export default Nav;