import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class Adress extends Component {
	render() {
		var display = { textAlign: 'center' };
		if (!this.props.adress) {
			display = { display: 'none' };
		}
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }} className="p-3 my-2 rounded">
				<Toast style={display}>
					<ToastHeader>Détails</ToastHeader>
					<ToastBody>
						<span style={{ color: '#6c757d', fontWeight: 'bolder' }}>Adresse :</span> {this.props.adress}
					</ToastBody>
				</Toast>
			</div>
		);
	}
}
export default Adress;
