import React from 'react';
import TextField from 'material-ui/TextField';
import BaseView from '../Base/BaseView';
import RaisedButton from 'material-ui/RaisedButton';

class MainInputView extends BaseView {
	constructor(props) {
		super(props);
		this.viewForm = (
			<main>
									<header>
							<h1 className="kdabra-app-title">
							 ¿Querés que tu negocio destaque en Facebook?
							</h1>
							<p className="kdabra-app-description">
						<span className="kdabra-app-description-title">KDABRA</span> es la herramienta que necesitás para mejorar la comunicación con tus clientes.
						Sumate ahora y obtené el plan inicial gratis.
						</p>
						</header>
			<div className="kdabra-app-container">


						<div className="kdabra-app-button-container">
						<TextField 
							hintText="Nombre"
							floatingLabelText="Nombre"
							className="kdabra-app-input"
							/>
							</div>

						<div className="kdabra-app-button-container">
							<TextField 
								hintText="Mail"
								floatingLabelText="Mail"
								className="kdabra-app-input"
								/>
						</div>

						<div className="kdabra-app-button-container">
							<RaisedButton 
								label="Sumarme"
								className="kdabra-app-submit"
								fullWidth={true} />
						</div>
					</div>
					</main>
		);
	}

	render() {
		return(
			<BaseView children = {this.viewForm} />
		);
	}
}

export default MainInputView;
