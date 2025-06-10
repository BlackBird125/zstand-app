import { create } from 'zustand';

type UserState = {
  username: string;
  setUsername: (name: string) => void;
  reset: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  username: '',
  setUsername: (name: string) => set({ username: name }),
  reset: () => set({ username: '' }),
})); 