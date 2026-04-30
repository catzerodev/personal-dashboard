import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("auth-token") || null,

  setToken: (token) => {
    localStorage.setItem("auth-token", token);
    set({ token });
  },

  logout: () => {
    localStorage.removeItem("auth-token");
    set({ token: null });
  },
}));