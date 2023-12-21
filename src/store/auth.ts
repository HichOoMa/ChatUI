/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import api from "./api";
import { createJSONStorage, persist } from "zustand/middleware";
import { connectSocket } from "../websocket/init";

interface IAuth {
  username: string;
  isAuth: boolean;
  register: (username: string, email: string, password: string) => void;
  login: (username: string, password: string) => void;
}

export const useAuthStore = create(
  persist<IAuth>(
    (set) => ({
      username: "",
      isAuth: false,
      register: (username: string, email: string, password: string) => {
        api
          .post("/register", { username, email, password })
          .then((response: any) => {
            localStorage.setItem("token", response.data.token);
            set({ isAuth: true });
            connectSocket();
            window.location.href = "/chat";
          })
          .catch((error) => {
            // TODO: catch error
            // TODO: add notification
            console.log(error);
          });
      },

      login: (username: string, password: string) => {
        api
          .post("/login", { username, password })
          .then((data: any) => {
            localStorage.setItem("token", data.token);
            set({ isAuth: true });
            connectSocket();
            window.location.href = "/";
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
