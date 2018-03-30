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

			],
			'scroll_item' : '1'
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


    componentDidMount() {
		this.getNextMessage();

    }

    componentDidUpdate() {
		if(this[`shouldScroll$`+this.state.scroll_item]) {
			this[`shouldScroll$`+this.state.scroll_item].scrollIntoView( {
				behavior: 'smooth'
			});
		}
    }


	getNextMessage(current_msg, vals) {
        var m = FlowService.GetNextMessage(current_msg || this.getCurrentMessage(), vals);
		this.state.messageList.push(m);

		if(m.scroll=='true')
		{
			this.state.scroll_item = m.id_message;
		}
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
					¿Querés que tu negocio use las mismas herramientas que <b>Coca-Cola</b> y <b>Johnnie Walker</b>?
				</h1>
				<h2 className="kdabra-app-subtitle">Usá la comunicación del mañana, hoy.</h2>
			</header>
				{
					this.state.messageList.length && this.state.messageList.map((element, key) => {
						return (
							<article className="message-container-article" key={'message_article_'+key}>
							<MessageContainer
								key={'shouldScroll$'+key}
								text={element.message}
								textTitle={element.message_title}
								sender={element.sender}
								type={element.type}
								className={"kdabra-app-description message " + element.class_used}
								/>
							<div 
								id= {'shouldScroll$' + element.id_message}
								ref = {(ref) => {
										this['shouldScroll$' + element.id_message] = ref
									}}>
							</div>
							</article>
						)

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
				</main>
			);
		}
	}

	export default MainInputView;
