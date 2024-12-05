import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Access-Control-Allow-Credentials': true,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
