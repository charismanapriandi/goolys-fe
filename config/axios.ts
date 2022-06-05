import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.BASE_URL
})

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    VALIDATE: '/api/auth/validate',
  }
}
