import axios from 'axios'
import { baseURL, token } from '../config/api.config'

const api = axios.create({
    baseURL,
    headers: {
        common: {
            Authorization: `Token ${token}`
        }
    }
})

export default api;
