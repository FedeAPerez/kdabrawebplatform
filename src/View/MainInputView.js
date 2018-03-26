import React from 'react';
import TextField from 'material-ui/TextField';
import BaseView from '../Base/BaseView';
import MessageHandleContainer from '../Container/MessageHandleContainer';
import MessageContainer from '../Container/MessageContainer';

class MainInputView extends BaseView {
	constructor(props) {
		super(props);
		this.state = {
		
			'messageList' : [
				{
					'id_message':'1',
					'sender':'kdabra',
					'message_title':'<h1>¡Hola!</h1>',
					'message':'<span class="kdabra">KDABRA</span> es la herramienta que necesitás para mejorar la comunicación con tus clientes usando Messenger. Dale a <b>empezar</b> y fijate lo que te podemos ofrecer.',
					'type':'text',
					'class_used':'left',
					'response_expected': {
						'type_response': 'big-button',
						'label': 'Empezar',
						'value': 'ok',
						'color':'#ff6600',
						'hover_color':'#ff9966'
					}
				},
				{
					'id_message':'2',
					'sender':'user',
					'message':'<b>¡EMPEZAR!</b>',
					'class_used':'right',
					'type':'text'
				},
				{
					'id_message':'3',
					'sender':'kdabra',
					'message_title':'<h2>Me gustaría conocer tu nombre.</h2>',
					'message':'¡Ingresalo en el recuadro de abajo! Es una buena forma de empezar una conversación (o eso me dijeron &#x1F601)',
					'type':'text',
					'class_used':'left left-lvl3',
					'response_expected': {
						'type_response': 'text-input',
						'type_expected': 'mail',
						'label': 'Mail',
						'value': 'mail',
						'color':'#ff6600',
						'hover_color':'#ff9966'
					}
				},
				{
					'id_message':'4',
					'sender':'user',
					'message':'<b>Fede</b>',
					'class_used':'right',
					'type':'text'
				},
				{
					'id_message':'5',
					'sender':'kdabra',
					'message_title':'<h2>Fede, vamos a darte la mejor opción.</h2>',
					'message':'Antes de eso nos gustaría contarte un poco más de <span class="kdabra">KDABRA</span> ¿Crees que lo necesitás, o vamos directamente a nuestros planes?',
					'type':'text',
					'class_used':'left left-lvl3',
					'response_expected': {
						'type_response': 'text-input',
						'type_expected': 'mail',
						'label': 'Mail',
						'value': 'mail',
						'color':'#ff6600',
						'hover_color':'#ff9966'
					}
				},
				{
					'id_message':'6',
					'sender':'user',
					'class_used':'right',
					'message':'¡Conocer más! &#x1F64B'
				},
				{
					'id_message':'7',
					'sender':'kdabra',
					'message_title':'<h2>Mil millones</h2>',
					'message':'Esa es la cantidad de personas que tiene Messenger en su celular &#x1F632, por eso creemos que es vital darte un ChatBot en cualquiera de nuestros planes.',
					'type':'text',
					'class_used':'left left-lvl3',
				},
				{
					'id_message':'8',
					'sender':'kdabra',
					'message_title':'<h2>¿Un ChatBot?</h2>',
					'message':'Así es, grandes marcas como Coca-Cola o Johnnie Walker usan intelgencia artificial para mejorar sus conversaciones. Hoy vas a jugar a su altura. &#x1F64C',
					'type':'text',
					'class_used':'left left-lvl3',
				},
				{
					'id_message':'8',
					'sender':'kdabra',
					'message_title':'<h2>¿Necesito expertos?</h2>',
					'message':'Por supuesto, te vamos a convertir en uno, pero para utilizar <span class="kdabra">KDABRA</span> no necesitás desarrolladores ni acceder a profesionales de altísimo costo.',
					'type':'text',
					'class_used':'left left-lvl3',
				}/*,
				{
					'id_message':'9',
					'sender':'kdabra',
					'message_title':'<h2>Fede, selecciona una opción.</h2>',
					'message':'Estos son nuestros pilares de <b>valor</b>.<br />Los usamos como la base para generar la mejor experiencia para vos y tus clientes.',
					'type':'text',
					'class_used':'left left-lvl3',
					'response_expected': {
						'type_response': 'text-input',
						'type_expected': 'mail',
						'label': 'Mail',
						'value': 'mail',
						'color':'#ff6600',
						'hover_color':'#ff9966'
					}
				},*/

			]
		}
	}
    renderMessages() {
        return this.state.messageList.length ? (
			<section className="kdabra-app-container">
			<header>
				<h1 className="kdabra-app-title">
					¿Querés que tu negocio destaque en Facebook?
				</h1>
				<h2 className="kdabra-app-subtitle">Usá la comunicación del mañana, hoy.</h2>
			</header>
				{
					this.state.messageList.map((element, key) => {

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
			
			</section>) : null;
	}
	
	renderAnswerContainer() {
        return this.state.messageList.length && this.state.messageList[this.state.messageList.length -1].response_expected
            ? (
			<div className="kdabra-app-response-container">
								<MessageHandleContainer
									type={this.state.messageList[this.state.messageList.length - 1].response_expected.type_response}
									responseExpected={this.state.messageList[this.state.messageList.length - 1].response_expected}
									onAnswerSubmit={this.onAnswerSubmit}
									ref="submitContainer"
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
