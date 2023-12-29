/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import api from "./api";

export interface IMessage {
  _id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  date: string;
}

interface IFriend {
  _id: string;
  name: string;
}

interface IProfileStore {
  messages: Map<string, IMessage[]>;
  friends: IFriend[];
  fetchMessages: (friendId: string) => void;
  handleNewMessage: (message: unknown, userId: string) => void;
  fetchFriendList: () => void;
  addFriend: (friendId: string) => void;
}

export const useProfileStore = create(
  persist<IProfileStore>(
    (set, get) => ({
      messages: new Map<string, IMessage[]>(),
      friends: [],
      fetchMessages: (friendId: string) => {
        api.get<IMessage[]>(`/messages/${friendId}`).then((res) => {
          if (res.status === 200 && res.data.length > 0) {
            const messages = get().messages;
            messages[friendId] = res.data;
            set({ messages: messages });
          }
        });
      },
      handleNewMessage: (message: any, userId: string) => {
        const messages = get().messages;
        if (messages[userId]) {
          messages[userId].push(message);
        } else {
          messages[userId] = [message];
        }
        set({ messages: messages });
      },
      fetchFriendList: () => {
        api.get<IFriend[]>("/friends").then((res) => {
          set({ friends: res.data });
        });
      },
      addFriend: (friendId: string) => {
        api.post("/friends", { _id: friendId }).then(() => {
          // TODO: notify user
        });
      }
    }),
    {
      name: "real-time-storage",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
