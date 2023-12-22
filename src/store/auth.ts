/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import api from "./api";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuth {
  username: string;
  isAuth: boolean;
  token: string;
  register: (username: string, email: string, password: string) => void;
  login: (username: string, password: string) => void;
  checkToken: () => void;
}

export const useAuthStore = create(
  persist<IAuth>(
    (set, get) => ({
      username: "",
      isAuth: false,
      token: "",
      register: (username: string, email: string, password: string) => {
        api
          .post("/register", { username, email, password })
          .then((response: any) => {
            set({ isAuth: true, token: response.data.token });
            window.location.href = "/";
          })
          .catch((error) => {
            // TODO: catch error
            // TODO: add notification
            console.log(error);
          });
      },

      login: (email: string, password: string) => {
        api
          .post("/login", { email, password })
          .then((response: any) => {
            set({ isAuth: true, token: response.data.token });
            window.location.href = "/chat";
          })
          .catch((error) => {
            console.log(error);
          });
      },

      checkToken: () => {
        const { token } = get();
        api
          .get("checkToken", { params: { token } })
          .then((response: any) => {
            set({ isAuth: true, username: response.data.username });
          })
          .catch((error) => {
            if (error.status === 401) {
              set({ token: "" });
            }
          });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
