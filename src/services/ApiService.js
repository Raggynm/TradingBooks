import Axios from 'axios'
import api from './api'


const ApiService = {

    SignUp: (body) => {
        return api.post('/Auths/register', body)
    },

    SignIn: (body) => {
        return api.post('/Auths/login', body)
    },

    Me: () => {
        return api.get('/Auths/me')
    },

    UserBookRegister: (body) => {
        return api.post('/Books/create', body)
    },

    StoreFindByUser: () => {
        return api.get('Stores/FindByUser')
    },

    CreateStore: (body) => {
        return api.post('Stores/Create', body)
    },

    UserBookFind: () => {
        return api.get('Books/FindByUser')
    },

    AnnounceCreate: (body, bookId) => {
        return api.post(`Announces/Create/${bookId}`, body)
    },

    Search: (search) => {
        return api.get(`Announces/Search/${search}`)
    }
    
}

export default ApiService