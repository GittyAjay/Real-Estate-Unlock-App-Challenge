import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

// Create an instance of Axios
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// Request Interceptor
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log('Request:', config);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response:', response);

    return response;
  },
  (error: AxiosError) => {
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
