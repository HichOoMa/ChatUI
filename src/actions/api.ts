/* eslint-disable @typescript-eslint/no-explicit-any */
const api = {
  GET: (route: string, options: any) => {
    const token = localStorage.getItem('token') || '';
    const params = new URLSearchParams(options?.params);
    return fetch(`${process.env.BASE_API_URL}${route}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: options?.body
    });
  },
  POST: (route: string, options: any) => {
    const token = localStorage.getItem('token') || '';
    const params = new URLSearchParams(options?.params);
    return fetch(`${process.env.BASE_API_URL}${route}?${params}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: options?.body
    });
  },
  DELETE: (route: string, options: any) => {
    const token = localStorage.getItem('token') || '';
    const params = new URLSearchParams(options?.params);
    return fetch(`${process.env.BASE_API_URL}${route}?${params}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: options?.body
    });
  },
  UPDATE: (route: string, options: any) => {
    const token = localStorage.getItem('token') || '';
    const params = new URLSearchParams(options?.params);
    return fetch(`${process.env.BASE_API_URL}${route}?${params}`, {
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json',
        token
      },
      body: options?.body
    });
  }
};

export default api;
