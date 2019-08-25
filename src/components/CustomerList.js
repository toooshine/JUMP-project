import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Container } from 'reactstrap';
import Adress from './Adress';
import Customer from './Customer';

class CustomerList extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = { adress: '', active: false, number: null };
	}
	handleClick(adress, number) {
		console.log(number);
		this.setState({
			active: true,
			adress: adress,
			number: number
		});
	}
	render() {
		var customerData = [
			{
				lastName: 'Martin',
				firstName: 'Arthur',
				adress: '30, Rue des Vergetiers, 76000 Rouen'
			},
			{
				lastName: 'Dupond',
				firstName: 'Edouard',
				adress: '14, Rue Pergolèse, 75116 Paris'
			},
			{
				lastName: 'Lemaitre',
				firstName: 'Christian',
				adress: '60, Rue de la Vicomte, 76000 Rouen'
			},
			{
				lastName: 'Cauhois',
				firstName: 'Thomas',
				adress: '46, Rue de Fontenelle, 76000 Rouen'
			}
		];

		var customerList = customerData.map((customer, i) => {
			return (
				<Customer
					key={i}
					number={i + 1}
					customerLastName={customer.lastName}
					customerFirstName={customer.firstName}
					customerAdress={customer.adress}
					handleClickParent={this.handleClick}
					numberChild={this.state.number}
				/>
			);
		});

		return (
			<div>
				<Container>
					<p style={style.p}>Liste des clients</p>

					<Table hover bordered size="sm">
						<thead>
							<tr style={{ color: '#535c68' }}>
								<th>Rangs</th>
								<th>Nom</th>
								<th>Prénom</th>
							</tr>
						</thead>
						{customerList}
					</Table>
					<Adress adress={this.state.adress} />
				</Container>
			</div>
		);
	}
}
var style = {
	p: {
		color: '#535c68',
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 30,
		marginTop: 30
	}
};
export default CustomerList;
