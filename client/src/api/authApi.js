import {instanceAxios} from './instanceAxios';
import jwt_decode from "jwt-decode";

export const authApi = {
    async check() {
        const {data} = await instanceAxios.get('api/user/auth');
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    },

    async login(email, password) {
        const {data} = await instanceAxios.post('api/user/login', {email, password,});
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    },

    async registration(email, password, role = 'ADMIN') {
        const {data} = await instanceAxios.post('api/user/registration', {
            email, password, role,
        });
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    },
};
