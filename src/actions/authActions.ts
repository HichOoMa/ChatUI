/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

export function register(email: string, password: string) {
  api
    .POST('/register', {
      body: { email, password }
    })
    .then((data: any) => {
      localStorage.setItem('token', data.token);
    })
    .catch((error) => {
      // catch error
      // add notification
      console.log(error);
    });
}
