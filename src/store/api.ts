import axios from 'axios';

const token = localStorage.getItem('token');

const headers: { [k: string]: string } = { 'Content-Type': 'application/json' };

if (token) {
  headers.token = `${token}`;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
const api = axios.create({
  baseURL: `${process.env.BASE_API_URL}`,
  headers
});

export default api;
