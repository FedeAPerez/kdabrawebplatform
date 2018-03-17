import React, { Component } from 'react';

class BaseView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			this.props.children
		);
	}
}

export default BaseView;