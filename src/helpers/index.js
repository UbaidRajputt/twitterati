import axios from 'axios';

export { default as getInitials } from './getInitials';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/'
})
