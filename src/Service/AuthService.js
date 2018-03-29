
const serviceUrl = 'https://kdabra-auth.herokuapp.com/api/users';

export class AuthService {

    static PostAuthentication() {

        return fetch(serviceUrl, {
            'method': 'post',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(
                { 'email': 'fedeaperez@hotmail.com.ar',
                  'name': 'Federico' }
                )
        })
            .then((response) => response.json())
            .then((js) => { console.log(js); return js; })
            ;
    }
}

export default AuthService;