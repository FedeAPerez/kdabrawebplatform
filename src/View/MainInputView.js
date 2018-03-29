import React, { Component } from 'react';
import MessageHandleContainer from '../Container/MessageHandleContainer';
import MessageContainer from '../Container/MessageContainer';
import FlowService from '../Service/FlowService';
import UserMessage from '../Base/UserMessage';

class MainInputView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'messageList' : [

			]
		}
	}

	onAnswerSubmit = (text, value, tags) => {
        var current_msg = this.getCurrentMessage();
        
        this.state.messageList.push(
			new UserMessage(text)
		);
		
		this.setState(this.state);
        this.getNextMessage(current_msg, tags);
    }

	getCurrentMessage() {
        return this.state.messageList.length
            ? this.state.messageList[this.state.messageList.length - 1]['id_message']
            : '';
    }

    scrollToBottom = () => {
        if (this.messagesEnd) {
            this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        }
    }

    componentDidMount() {
		this.getNextMessage();
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }


	getNextMessage(current_msg, vals) {
        var m = FlowService.GetNextMessage(current_msg || this.getCurrentMessage(), vals);
        this.state.messageList.push(m);
		this.setState(this.state);
		if(m.next_message) {
			this.getNextMessage(this.getCurrentMessage());
		}
    }

    renderMessages() {
        return (
			<section className="kdabra-app-container">
			<header>
				<h1 className="kdabra-app-title">
					¿Querés que tu negocio pase de ser una empresa obsoleta a una <b>marca destacada</b>?
				</h1>
				<h2 className="kdabra-app-subtitle">Usá la comunicación del mañana, hoy.</h2>
			</header>
				{
					this.state.messageList.length && this.state.messageList.map((element, key) => {

						return <MessageContainer
							key={key}
							text={element.message}
							textTitle={element.message_title}
							sender={element.sender}
							type={element.type}
							className={"kdabra-app-description message " + element.class_used}
							/>
					})
				}

				<div className="clear">
								</div>
			
			</section>);
	}
	
	renderAnswerContainer() {
        return this.state.messageList.length && this.state.messageList[this.state.messageList.length -1].response_expected
            ? (
			<div className="kdabra-app-response-container">
								<MessageHandleContainer
									key={this.state.messageList.length + 'respuesta_esperada'}
									type={this.state.messageList[this.state.messageList.length - 1].response_expected.type_response}
									responseExpected={this.state.messageList[this.state.messageList.length - 1].response_expected}
									onAnswerSubmit={this.onAnswerSubmit}
									/>
				</div>
            )
            : null;
    }


	render() {
		return(
				<main>
					{
						this.renderMessages()
					}{
						this.renderAnswerContainer()
					} 

					<div
					    ref={(scrollBo) => { this.messagesEnd = scrollBo; }}
                	>
                	</div>
				</main>
			);
		}
	}

	export default MainInputView;
