import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Customer extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.handleClickParent(this.props.customerAdress, this.props.number);
	}
	render() {
		var display;

		if (this.props.numberChild === this.props.number) {
			display = { backgroundColor: '#74b9ff' };
		}

		return (
			<tbody onClick={this.handleClick}>
				<tr style={display}>
					<td>{this.props.number}</td>
					<td>{this.props.customerLastName}</td>
					<td>{this.props.customerFirstName}</td>
				</tr>
			</tbody>
		);
	}
}

export default Customer;
