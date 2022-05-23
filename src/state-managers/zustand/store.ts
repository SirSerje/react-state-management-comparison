import create from 'zustand';

interface ZustandState {
  counter: number;
  decrement: () => void;
  increment: () => void;
}

export const useApplicationState = create<ZustandState>((set, get) => ({
  counter: 0,
  increment: () => {
    set((state) => ({
      counter: state.counter + 1,
    }));
  },
  decrement: () => {
    if (get().counter > 0) {
      set((state) => ({
        counter: state.counter - 1,
      }));
    }
  },
}));
