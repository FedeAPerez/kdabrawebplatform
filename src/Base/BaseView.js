import React, { Component } from 'react';

class BaseView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("instanciado en la vista");
		return(
			this.props.children
		);
	}
}

export default BaseView;