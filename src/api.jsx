import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';  // Adjust the URL to match the backend's URL

export const api = axios.create({
  baseURL: API_URL,
});
