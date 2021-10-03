import axios from 'axios';
import { getUser } from './auth';

export const URL = 'https://indiaohyesserver.herokuapp.com';

const instance = axios.create({
    baseURL: `${URL}/api`,
    timeout: 10000,
    withCredentials: true,
    credential: 'include'
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${getUser()}`;
    return config;
})

export default instance;
