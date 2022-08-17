import axios from 'axios';
import {ACCESS_TOKEN, getCookie, removeCookie} from './cookie';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
});

axiosInstance.interceptors.request.use(config => {
  const token = getCookie(ACCESS_TOKEN);
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
},
error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
  if(response.status === 502){
    console.error('Đã xảy ra lỗi, vui lòng thử lại sau');
  }
  return response;
},
error => {
  console.log(error);
  if(error.response?.status === 401) {
    removeCookie(ACCESS_TOKEN);
    window.location = '/login';
  }
  return Promise.reject(error);
});

export const axiosUploadFile = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
});

axiosUploadFile.interceptors.request.use(config => {
  const token = getCookie(ACCESS_TOKEN);
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
},
error => {
  return Promise.reject(error);
});

axiosUploadFile.interceptors.response.use(response => {
  return response;
},
error => {
  if(error.response?.status === 401) {
    removeCookie(ACCESS_TOKEN);
    window.location = '/login';
  }
  return Promise.reject(error);
});
