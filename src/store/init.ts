import { create } from 'zustand';

interface IAuth {
  username: string;
  isAuthentificated: boolean;
  updateAuth: (isAuth: boolean) => void;
}
export const useAuth = create<IAuth>((set) => ({
  username: '',
  isAuthentificated: false,
  updateAuth: (isAuth: boolean) => {
    set({ isAuthentificated: isAuth });
  }
}));
