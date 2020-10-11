import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://foodshades-f7038.firebaseio.com/'
});

export default instance;