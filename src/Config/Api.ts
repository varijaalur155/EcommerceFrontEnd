import axios from 'axios';

export const API_URL = "https://ecommercebackend-z7gb.onrender.com";
export const DEPLOYED_URL = "https://ecommercebackend-z7gb.onrender.com"
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});