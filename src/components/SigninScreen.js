import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class SigninScreen extends Component {
	constructor() {
		super();
		this.state = { email: '', password: '', errorMessage: '' };
	}
	handleSubmit = () => {
		const id = { email: 'toto', password: 'toto' };
		if (this.state.email === id.email && this.state.password === id.password) {
			console.log('OK');
			this.setState({
				errorMessage: ''
			});
			this.props.history.push('/CustomerList');
		} else {
			this.setState({
				errorMessage: 'Wrong credentials, try again... (id:toto,pwd:toto)'
			});
		}
	};
	render() {
		return (
			<div>
				<Form>
					<p style={{ textAlign: 'center', margin: 50, color: '#6c757d', fontWeight: 'bolder' }}>
						Veuillez vous authentifier.
					</p>
					<FormGroup row style={style.formgroup}>
						<Label for="exampleEmail" sm={2} style={style.form}>
							Utilisateur :
						</Label>
						<Col xs="12" sm="6" md="4" lg="2">
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								onChange={(e) => this.setState({ email: e.target.value })}
							/>
						</Col>
					</FormGroup>
					<FormGroup row style={style.formgroup}>
						<Label for="examplePassword" sm={2} style={style.form}>
							Mot de passe :
						</Label>
						<Col xs="12" sm="6" md="4" lg="2">
							<Input
								type="password"
								name="password"
								id="examplePassword"
								onChange={(e) => this.setState({ password: e.target.value })}
							/>
						</Col>
					</FormGroup>
					<FormGroup check row style={{ textAlign: 'center' }}>
						<Col sm={{ size: 10, offset: 2 }}>
							<Button onClick={this.handleSubmit}>Valider</Button>
						</Col>
					</FormGroup>
				</Form>
				<p style={style.display}>{this.state.errorMessage}</p>
			</div>
		);
	}
}
const style = {
	display: {
		marginTop: 50,
		textAlign: 'center',
		color: '#d63031'
	},
	form: {
		color: '#6c757d'
	},
	formgroup: { justifyContent: 'center' }
};
export default SigninScreen;
