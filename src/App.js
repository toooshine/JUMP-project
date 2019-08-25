import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SigninScreen from './components/SigninScreen';
import CustomerList from './components/CustomerList';
class App extends Component {
	render() {
		return (
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={SigninScreen} />
					<Route path="/CustomerList" component={CustomerList} />
				</Switch>
			</Router>
		);
	}
}
export default App;
