/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { create } from 'zustand';
import api from './api';
import { useNavigate } from 'react-router-dom';

interface IAuth {
  username: string;
  isAuthentificated: boolean;
  register: (username: string, email: string, password: string) => void;
}

const redirect = (route: string) => {
  const navigate = useNavigate();
  navigate(route);
};

export const useAuthStore = create<IAuth>((set) => ({
  username: '',
  isAuthentificated: false,
  register: (username: string, email: string, password: string) => {
    api
      .post('/register', { username, email, password })
      .then((response: any) => {
        localStorage.setItem('token', response.data.token);
        set({ isAuthentificated: true });
        redirect('/chat');
      })
      .catch((error) => {
        // TODO: catch error
        // TODO: add notification
        console.log(error);
      });
  },
  login: (username: string, password: string) => {
    api
      .post('/login', { username, password })
      .then((data: any) => {
        localStorage.setItem('token', data.token);
        window.location.href = '/';
        set({ isAuthentificated: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}));
