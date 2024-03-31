import axios from 'axios';

//use this axios configuration to execute api requests on Back End

const api = axios.create({
  baseURL: 'http://localhost:8080', 
  withCredentials: true 
});

// Add a request interceptor to include the Authorization header with the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;