import axios from 'axios';

const API_URL =  process.env.REACT_APP_API_URL || 'https://cleaner-app-back-end.onrender.com';  // Adjust the URL to match the backend's URL
// const API_URL = 'http://127.0.0.1:5000'
export const api = axios.create({
  baseURL: API_URL,
});
