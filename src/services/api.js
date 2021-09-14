import axios from 'axios';

import getBaseUrl from './detail';

export default axios.create({
    baseURL: `${getBaseUrl()}/api`,
    timeout: 10000
});