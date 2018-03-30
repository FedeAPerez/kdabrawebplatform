import AuthService from './AuthService';
export class FlowService {

	static GetNextMessage(current_message, form_info) {
		var messages = [
			{
				'id_message':'1',
				'sender':'kdabra',
				'message_title':'<h1>¡Hola!</h1>',
				'message':'<span class="kdabra">KDABRA</span> es la herramienta 100% interactiva que utiliza mensajería para brindar la mejor experiencia a tus usuarios &#x1F60D. Dale a <b>empezar</b> y fijate lo que te podemos ofrecer.',
				'type':'text',
				'class_used':'left',
				'scroll':'false',
				'response_expected': {
					'type_response': 'big-button',
					'label': 'Empezar',
					'value': 'ok',
					'color':'#3949AB',
					'hover_color':'#5C6BC0'
				}
			},
			{
				'id_message':'2',
				'sender':'kdabra',
				'message_title':'<h2>Me gustaría conocer tu nombre.</h2>',
				'message':'¡Ingresalo en el recuadro de abajo! Es una buena forma de empezar una conversación (o eso me dijeron &#x1F601)',
				'type':'text',
				'class_used':'left left-lvl3',
				'scroll':'true',
				'response_expected': {
					'type_response': 'text-input',
					'label': 'Nombre',
					'id_tag': '{{name}}',
					'mask':'Juán'
					
				}
			},
			{
				'id_message':'3',
				'sender':'kdabra',
				'message_title':'<h2>{{name}}, vamos a generar tu ChatBot.</h2>',
				'message':'Antes de eso nos gustaría contarte un poco más de <span class="kdabra">KDABRA</span>. <br />¿Te parece bien?',
				'type':'text',
				'class_used':'left left-lvl3',
				'scroll':'true',
				'response_expected': {
					'type_response': 'multiple-selector',
					'options': [
						{
							'label':'¡Dale!',
							'theme':'default',
							'value':'¡Dale!'
						},
						{
							'label':'No, pero Sí',
							'theme':'secondary',
							'value':'No, pero Sí'
						}
					]
					
				}
			},
			{
				'id_message':'4',
				'sender':'kdabra',
				'message_title':'<h2>Tu propio bot &#x1F4BB</h2>',
				'scroll':'true',
				'message':'Vas a tener tu ChatBot completamente en nuestra web &#x1F632, al finalizar está conversación vas a poder compartir a tus clientes un link www.gokdabra.com/nombre_de_empresa.',
				'type':'text',
				'class_used':'left left-lvl3',
				'next_message':'5'
			},
			{
				'id_message':'5',
				'sender':'kdabra',
				'scroll':'false',
				'message_title':'<h2>¿Un ChatBot?</h2>',
				'message':'Así es, grandes marcas como Coca-Cola o Johnnie Walker usan inteligencia artificial para mejorar sus conversaciones. Hoy vas a jugar a su altura. &#x1F64C',
				'type':'text',
				'class_used':'left left-lvl3',
				'next_message':'6'
			},
			{
				'id_message':'6',
				'sender':'kdabra',
				'scroll':'false',
				'message_title':'<h2>¿Necesito expertos?</h2>',
				'message':'Por supuesto, te vamos a convertir en uno, pero para utilizar <span class="kdabra">KDABRA</span> no necesitás desarrolladores ni acceder a profesionales de altísimo costo.',
				'type':'text',
				'class_used':'left left-lvl3',
				'next_message':'7'
			},
			{
				'id_message':'7',
				'sender':'kdabra',
				'scroll':'false',
				'message_title':'<h2>¿Cómo te gustaría que sea el link de tu empresa?</h2>',
				'message':'Vas a compartir tu Bot desde www.gokdabra.com',
				'class_used':'left left-lvl3',
				'response_expected': {
					'type_response': 'text-input',
					'label': 'Link del Bot',
					'value': 'bot_name',
					'mask':'www.gokdabra.com/',
					'id_tag':'{{link_bot}}',
					'first_mask':'www.gokdabra.com/'
				}
			},
			{
				'id_message':'8',
				'scroll':'true',
				'sender':'kdabra',
				'message_title':'<h2>¡Perfecto!</h2>',
				'message':'Ya podés ver tu bot en {{link_bot}}<br />',
				'class_used':'left left-lvl3'
			}
		]
		var messageToReturn = messages[current_message || 0];
		if(form_info) {
			for(var i = 0; i < form_info.length; i++) {
				messageToReturn.message_title = messageToReturn.message_title.replace(form_info[i].tag, form_info[i].value);
				messageToReturn.message = messageToReturn.message.replace(form_info[i].tag, form_info[i].value);
			}
		}

		return messageToReturn;
	}
}

export default FlowService;
