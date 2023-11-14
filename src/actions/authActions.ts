/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/init';
import api from './api';

export function UserRegister(username: string, email: string, password: string) {
  const updateAuth = useAuth((state) => state.updateAuth);
  const navigate = useNavigate();
  console.log('test 23');
  api
    .POST('/register', {
      body: { username, email, password }
    })
    .then((data: any) => {
      localStorage.setItem('token', data.token);
      updateAuth(true);
      navigate('/chat');
    })
    .catch((error) => {
      // catch error
      // add notification
      console.log(error);
    });
}

export function login(username: string, password: string) {
  const updateAuth = useAuth((state) => state.updateAuth);
  api
    .POST('/login', {
      body: { username, password }
    })
    .then((data: any) => {
      localStorage.setItem('token', data.token);
      updateAuth(true);
      window.location.href = '/';
    });
}
