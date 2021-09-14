import axios from 'axios';

export const URL = 'http://localhost:3000';

export default axios.create({
    baseURL: `${URL}/api`,
    timeout: 10000
});