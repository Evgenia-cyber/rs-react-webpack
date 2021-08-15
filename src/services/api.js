import * as axios from 'axios';
import { defaultCurrentPage } from '../constants/constants';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 3000,
  params: {
    apiKey: process.env.REACT_APP_NEWSAPI_KEY,
  },
});

export const fetchArticles = (searchValue, sortBy, pageSize, currentPage = defaultCurrentPage) =>
  axiosInstance.get('v2/everything', {
    params: {
      q: searchValue,
      sortBy,
      pageSize,
      page: currentPage,
    },
  });

export default axiosInstance;
