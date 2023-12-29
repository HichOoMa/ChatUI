import { create } from "zustand";
import { connectSocket, disconnectSocket } from "../websocket/init";

interface IWsStore {
  ws: WebSocket | null;
  connectWebsocket: () => void;
  disconnectWebsocket: () => void;
  sendMessage: (friendId: string, content: string) => void;
}

export const useWsStore = create<IWsStore>((set, get) => ({
  // track websocket instance
  ws: null,
  connectWebsocket: () => {
    const { ws } = get();
    if (!ws || ws.readyState === WebSocket.CLOSED) {
      const websocket = connectSocket();
      set(() => ({ ws: websocket }));
    }
  },
  disconnectWebsocket: () => {
    const { ws } = get();
    if (ws && ws.readyState === WebSocket.OPEN) {
      disconnectSocket(ws);
    }
  },
  sendMessage: (friendId, content) => {
    const { ws } = get();
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          friend_id: friendId,
          content: content
        })
      );
      console.log("message sent", content);
    }
  }
}));
