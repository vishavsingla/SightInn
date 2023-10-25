

import { KEY_ACCESS_TOKEN, getItem,setItem } from './localStorageManager';
import axios from 'axios';

const baseURL = "http://localhost:8080";

const axiosClient = axios.create({
    withCredentials: true,
    baseURL: baseURL,
})

axiosClient.interceptors.request.use( 
    (request) => {
        const accessToken = getItem(KEY_ACCESS_TOKEN);
        request.headers['Authorization'] = `Bearer ${accessToken}`;
        return request;
    }
)

axiosClient.interceptors.response.use(
    async(response) => {
        const data = response.data;
        if(data.status === 'ok'){
            return data;
        }

        const originalRequest = response.config;
        const statusCode = data.statusCode;
        const error = data.error;

//when refresh token expires send user to login page
        if(statusCode === 401 && originalRequest.url === 'http://localhost:8080/auth/refresh'){
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace('/login', '_self');
            return Promise.reject(error);
        }

        if(statusCode === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            const response = await axios.create({withCredentials:true,}).get('http://localhost:8080/auth/refresh');
            if(response.status === 'ok'){
                const accessToken = response.result.accessToken;
                setItem(KEY_ACCESS_TOKEN, accessToken);
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return axios(originalRequest);
            }
        }
        return Promise.reject(error)
    }
);
export default axiosClient;




