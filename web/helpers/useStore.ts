import create from 'zustand';

interface State {
  username: string;
}

interface ZustandState extends State {
  setUsername: (name: string) => void;
}

export const useStore = create<ZustandState>((set) => ({
  username: '',
  setUsername: (username: string) => set({ username }),
}));
