import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import GoogleMapSearch from './GoogleMapSearch';
import Landing from './Landing';
import Dashboard from './Dashboard';
// const SurveyNew = () => <h2>SurveyNew</h2>

// Holds all the other components
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render () {
		return ( 
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/search" component={GoogleMapSearch} />
					<Route exact path="/dashboard" component={Dashboard} />
				</div>
			</BrowserRouter>
		</div>
		);
	}
};

export default connect(null, actions)(App);

