import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.29.21.253:3333',
});

export default api;