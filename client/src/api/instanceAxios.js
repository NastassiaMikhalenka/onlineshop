import axios from 'axios';

export const instanceAxios = axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

// export const addAuthHeader = () => {
//     return {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//     };
// };

instanceAxios.interceptors.request.use(authInterceptor)