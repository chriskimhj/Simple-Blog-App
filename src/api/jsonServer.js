import axios from 'axios';

export default axios.create({
    // update per ngrok session
    baseURL: 'https://5450-199-119-235-170.ngrok-free.app'
});