import axios from "axios";

const authStorage = localStorage.getItem("auth-storage");
const authObject = authStorage ? JSON.parse(authStorage) : null;

const headers: { [k: string]: string } = { "Content-Type": "application/json" };

if (authObject) {
  headers.token = `${authObject.state.token}`;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
const api = axios.create({
  baseURL: `${process.env.BASE_API_URL}`,
  headers
});

export default api;
