import axios from 'axios';

const API_URL =  'https://cleaner-app-back-end.onrender.com'; 
export const api = axios.create({
  baseURL: API_URL,
});
