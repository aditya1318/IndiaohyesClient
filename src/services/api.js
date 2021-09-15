import axios from 'axios';

export const URL = 'https://indiaohyesserver.herokuapp.com/';

export default axios.create({
    baseURL: `${URL}/api`,
    timeout: 10000
});
