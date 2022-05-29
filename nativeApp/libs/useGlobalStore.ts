import create from "zustand";

interface State {
  username: string;
}

interface ZustState extends State {
  setUsername: (userName: string) => void;
}

export const useGlobalStore = create<ZustState>((set) => {
  return {
    username: "",
    setUsername: (username) => {
      set({
        username,
      });
    },
  };
});
