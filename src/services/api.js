import axios from 'axios';
import { getUser } from './auth';
//indiaohyesserver.herokuapp.com
export const URL = 'https://indiaohyesserver.herokuapp.com';

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
