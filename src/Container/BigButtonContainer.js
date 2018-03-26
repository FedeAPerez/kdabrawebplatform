import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class BigButtonContainer extends Component {
	constructor(props) {
		super(props);
	}

	submitMessage() {
		if(this.props.onClick)
			this.props.onClick( this.props.responseExpected.label, this.props.responseExpected.value)
	}
	
	render() {
		const bigButtonStyle = {
			color: '#ffffff',
			width: '264px',
			height: '48px',
			borderRadius: '6px'
		}
		
		return(
			<FlatButton 
				id={ this.props.responseExpected.value }
				value={ this.props.responseExpected.value }
				label={ this.props.responseExpected.label }
                backgroundColor={ this.props.responseExpected.color }
                hoverColor={ this.props.responseExpected.hover_color }
				onClick={ this.submitMessage.bind(this) }
				className="big-button"
                style={ bigButtonStyle } 
                fullWidth={true}
			/>
		);
	}
}