/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

export function UserRegister(username: string, email: string, password: string) {
  api
    .POST('/register', {
      body: { username, email, password }
    })
    .then((data: any) => {
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    })
    .catch((error) => {
      // catch error
      // add notification
      console.log(error);
    });
}
