
const serviceUrl = process.env.AUTHENTICATION_ENDPOINT.trim() + '/';

export class AuthService {

    static PostAuthentication(current_message, form_info) {

        return fetch(serviceUrl + 'flow/next/with_mocks', {
            'method': 'post',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify({ 'current_message': current_message, 'subscription_info': form_info })
        })
            .then((response) => response.json())
            .then((js) => { console.log(js); return js; })
            ;
    }
}

export default AuthService;