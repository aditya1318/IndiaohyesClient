import axios from 'axios';
import { getUser } from './auth';

export const URL = 'http://localhost:3000';

const instance = axios.create({
    baseURL: `${URL}/api`,
    timeout: 10000,
    withCredentials: true
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${getUser()}`;
    return config;
})

export default instance;
