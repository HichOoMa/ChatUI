/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import api from "./api";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuth {
  username: string;
  userId: string;
  isAuth: boolean;
  token: string;
  register: (username: string, email: string, password: string) => void;
  login: (username: string, password: string) => void;
  checkToken: () => void;
  logout: () => void;
}

const initialState = { username: "", userId: "", isAuth: false, token: "" };

export const useAuthStore = create(
  persist<IAuth>(
    (set, get) => ({
      ...initialState,
      register: (username: string, email: string, password: string) => {
        api
          .post("/register", { username, email, password })
          .then((response) => {
            set({
              isAuth: true,
              token: response.data.token,
              username: response.data.username,
              userId: response.data.username
            });
            window.location.href = "/";
          })
          .catch((error) => {
            // TODO: catch error
            // TODO: add notification
            set({ ...initialState });
            console.log(error);
          });
      },

      login: (email: string, password: string) => {
        api
          .post("/login", { email, password })
          .then((response: any) => {
            set({
              isAuth: true,
              token: response.data.token,
              username: response.data.username,
              userId: response.data.username
            });
            window.location.href = "/chat";
          })
          .catch((error) => {
            set({ ...initialState });
            console.log(error);
          });
      },

      checkToken: () => {
        const { token } = get();
        if (!token) {
          set({ ...initialState });
          return;
        }
        api
          .get(`checkToken?token=${token}`)
          .then((response: any) => {
            set({
              isAuth: true,
              token: response.data.token,
              username: response.data.username,
              userId: response.data.username
            });
          })
          .catch((error) => {
            if (error.status === 401) {
              set({ ...initialState });
            }
          });
      },

      logout: () => {
        set({ ...initialState });
        window.location.href = "/";
      }
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
