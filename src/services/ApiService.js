import Axios from 'axios'
import api from './api'


const ApiService = {

    SignUp: (body) => {
        return api.post('/Auths/register', body)
    },

    SignIn: (body) => {
        return api.post('/Auths/login', body)
    },

    Me: (body) => {
        return api.get('/Auths/me')
        .then(res => {return res})
        .catch(e => {return Promise.reject(e)})
    },
    
}

export default ApiService