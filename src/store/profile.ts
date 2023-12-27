import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import api from "./api";

interface IMessage {
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

interface IRealTimeStore {
  userId: string;
  messages: Map<string, IMessage[]>;
  friends: IFriend[];
  fetchMessages: (friendId: string) => void;
  handleNewMessage: (message: IMessage) => void;
  fetchFriendList: () => void;
  addFriend: (friendId: string) => void;
}

export const useRealTimeStore = create(
  persist<IRealTimeStore>(
    (set) => ({
      userId: "",
      messages: new Map<string, IMessage[]>(),
      friends: [],
      fetchMessages: (friendId: string) => {
        api.post<IMessage[]>("messages/", { _id: friendId }).then((res) => {
          if (res.status === 200) {
            set((state) => {
              const messages = new Map<string, IMessage[]>(state.messages);
              messages.set(friendId, res.data);
              return { messages: messages };
            });
          }
        });
      },
      handleNewMessage: (message: IMessage) => {
        set((state) => {
          const messages = new Map<string, IMessage[]>(state.messages);
          if (messages.has(state.userId)) {
            messages.get(state.userId)?.push(message);
          } else {
            messages.set(state.userId, [message]);
          }
          return { messages: messages };
        });
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
