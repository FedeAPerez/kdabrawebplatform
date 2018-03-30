import React, { Component } from 'react';
import MessageComponent from '../Component/message-component'

export default class MessageContainer extends Component {
    constructor(props) {
        super(props);

    }




    render() {
        return(
            <article>
            <MessageComponent 
                text={ this.props.text }
				textTitle= { this.props.textTitle }
                className={ this.props.className }
            />
            </article>
        );
    }
}
