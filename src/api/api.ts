import axios from 'axios'

const api = axios.create({
    baseURL: 'https://organizadbapi.herokuapp.com//v1/produto'
})

export default api