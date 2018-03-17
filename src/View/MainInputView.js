import React from 'react';
import TextField from 'material-ui/TextField';
import BaseView from '../Base/BaseView';
import RaisedButton from 'material-ui/RaisedButton';

class MainInputView extends BaseView {
	constructor(props) {
		super(props);
		this.viewForm = (
			<div className="kdabra-app-container">
						<header>
							<h1>
							 ¿Querés que tu negocio destaque en Facebook?
							</h1>
						</header>
						<p>
						KDABRA es la herramienta que necesitás para mejorar la comunicación con tus clientes.
						Sumate ahora y obtené el plan inicial gratis.
						</p>
	
						<TextField 
							hintText="Nombre"
							floatingLabelText="Nombre"
							/>
	
						<TextField 
							hintText="Mail"
							floatingLabelText="Mail"
							/>

							<RaisedButton label="Sumarme" />
					</div>
		);
	}

	render() {
		return(
			<BaseView children = {this.viewForm} />
		);
	}
}

export default MainInputView;
