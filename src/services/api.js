import axios from 'axios';


export const key = '1fca8946';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;