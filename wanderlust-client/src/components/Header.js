import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		if (this.props.auth) {
			return (
				<div>
					<li><a href ="/dashboard">Dashboard</a></li>
					<li><a href ="/activities">Wishlist</a></li>
					<li><a href ="#">Welcome, {this.props.auth.fname} {this.props.auth.lname}.</a></li>
					<li><a href ="/api/logout">Logout</a></li>
				</div>
			);
		} else {
			return (
				<li><a href ="/auth/google">Login with Google</a></li>
			);
		}
		
	}

	render() {
		console.log('user information', this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<Link 
						to={this.props.auth ? '/search' : '/'} 
						className="left brand-logo"
					>
						WanderLust
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		); 
	}	
}

// function mapStateToProps(state) {
// 	return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);