import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionInput from 'material-ui/svg-icons/action/input';
import RaisedButton from 'material-ui/RaisedButton';
import BigButtonContainer from './BigButtonContainer';

export default class MessageHandleContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            enableInput: false
        }
    }

    onValueChange = (newVal, valid) => {
        this.setState(
            {
                inputValue: newVal,
                enableInput: valid
            }
        );
    }

    handleSubmit = (text, value) => {
        this.props.onAnswerSubmit(text, value);
    }

    closeInput = (message) => {
        this.props.onSubmit(message);
    }

    render() {
        switch (this.props.type) {
            case 'big-button':
                return (
                    <section className="responseContainer">
                        <BigButtonContainer
                            closeInput={this.closeInput}
                            responseExpected={this.props.responseExpected}
                            onClick={this.handleSubmit}
                        />
                    </section>
                );

				break;
			case 'text-input':
				return (
					<TextField 
						/>
				);
				break;
            default:
                return (<div>ANSWER TYPE NOT SUPPORTED</div>);
                break;
        }

    };
}