import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true
})



api.interceptors.response.use(
    (response) => {
        // 응답을 성공적으로 받았을 때 로그 출력
        console.log("Response Interceptor:", response);
        return response;
    },
    async (error) => {
        console.log("재발급 코드 실행중")
        const originalRequest = error.config;
        if (originalRequest.url === '/auth/refreshtoken') {
            return Promise.reject(error);
        }
        console.log(error)
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await api.post('/auth/refreshtoken', {}, { withCredentials: true });
                console.log("재발급 API 실행중")
                return api(originalRequest);
            } catch (refreshError) {
                window.location.href = '/login'; // 로그인 페이지로 이동

                return Promise.reject(refreshError);
                
            }
        }
        return Promise.reject(error);
    }
);


export default api