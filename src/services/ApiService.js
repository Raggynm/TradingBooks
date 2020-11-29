import Axios from 'axios'
import api from './api'


const ApiService = {

    SignUp: (body) => {
        api.post('/Auths/register', body)
        .then(res => {
            console.log(res.data, res.status)
        })
        .catch(e => console.log(e))
    }
}

export default ApiService