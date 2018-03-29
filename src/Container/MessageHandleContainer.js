import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MultipleSelectionContainer from './MultipleSelectionContainer';
import BigButtonContainer from './BigButtonContainer';
import TextInputContainer from './TextInputContainer';

export default class MessageHandleContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (text, value, tags) => {
        this.props.onAnswerSubmit(text, value, tags);
    }

    render() {
        switch (this.props.type) {
            case 'text-input':
            return (
                <TextInputContainer
                    closeInput= { this.handleSubmit }
                    responseExpected= { this.props.responseExpected }
                    principal= {true}
                />
            );
            break;
            case 'big-button':
                return (
                        <BigButtonContainer
                            responseExpected={this.props.responseExpected}
                            onClick={this.handleSubmit}
                        />
                );
                break;
            case 'multiple-selector':
                return (
                        
                        <MultipleSelectionContainer
                            responseExpected={this.props.responseExpected}
                            onClick={this.handleSubmit}
                        />
                );
				break;
            default:
                return (<div>ANSWER TYPE NOT SUPPORTED</div>);
                break;
        }

    };
}