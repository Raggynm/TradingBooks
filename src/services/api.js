import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-tradingbooks.herokuapp.com/api'
})

export default api