import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 3000,
  params: {
    apiKey: process.env.REACT_APP_NEWSAPI_KEY,
  },
});

export default axiosInstance;
