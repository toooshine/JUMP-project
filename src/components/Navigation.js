import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar color="primary" light expand="xs">
					<Nav className="" navbar>
						<NavItem>
							<NavLink style={{ color: '#FFFFFF' }} href="#">
								Application JUMP
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
export default Navigation;
