import axios from 'axios';

import PathEnum from './paths';

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const tokenName = 'login-token';

const Api = axios.create({
  baseURL: PathEnum.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});
if (typeof window !== 'undefined' && window.localStorage.getItem(tokenName)) {
  Api.defaults.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem(tokenName)}`;
}

export default Api;
