import axios from 'axios';

const API_URL =  process.env.REACT_APP_API_URL;  // Adjust the URL to match the backend's URL

export const api = axios.create({
  baseURL: API_URL,
});
