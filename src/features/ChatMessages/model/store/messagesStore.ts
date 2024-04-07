import { create } from "zustand";
import type { ChatMessage } from "../../../../entities/Chat";

type Action = {
  setMessage: (message: ChatMessage) => void;
};

type Store = {
  messages: ChatMessage[];
};

const messageStore = create<Action & Store>((set) => ({
  messages: [],
  setMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }));
  },
}));

export { messageStore };
