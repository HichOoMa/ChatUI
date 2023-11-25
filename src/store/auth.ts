/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import api from './api';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IAuth {
  username: string;
  isAuth: boolean;
  register: (username: string, email: string, password: string) => void;
  login: (username: string, password: string) => void;
  test: () => void;
}

export const useAuthStore = create(
  persist<IAuth>(
    (set) => ({
      username: '',
      isAuth: false,
      register: (username: string, email: string, password: string) => {
        api
          .post('/register', { username, email, password })
          .then((response: any) => {
            localStorage.setItem('token', response.data.token);
            set({ isAuth: true });
            window.location.href = '/chat';
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
            set({ isAuth: true });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      test: () => {
        set({ isAuth: true });
        console.log(useAuthStore.getState().isAuth);
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
