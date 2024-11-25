// 로그인, 로그아웃, 토큰 갱신 로직을 담당하는 AuthService
import api from '../../../app/api.js';

const authService = {
    login : async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data
    },
    logout : async () => {
        await api.post('/auth/logout');
    },
    refreshAccessToken: async () => {
        await api.post('/refresh-token');
        
    },
    checkAuth : async () => {
        const response = await api.get('/auth/check');
        return response
    }
}

export default authService