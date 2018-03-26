import React, { Component } from 'react';

export default class MessageComponent extends Component {
    constructor(props) {
        super(props);
    }

	getDescriptionHtml() {
		return { __html: this.props.text }
	}

	getTitleHTML() {
		return { __html: this.props.textTitle }
	}

    render() {
        return(
			<article className={ this.props.className }>
				{ this.props.textTitle && <span dangerouslySetInnerHTML={ this.getTitleHTML() }></span> }
				{ this.props.text && <p dangerouslySetInnerHTML={ this.getDescriptionHtml() }></p> }
			</article>
        );
    }
}