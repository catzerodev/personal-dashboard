import { create } from "zustand";

export const useFocusCounter = create((set) => ({
  counter: 0,

  increment: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),

  decrement: () =>
    set((state) => ({
      counter: Math.max(state.counter - 1, 0),
    })),
}));