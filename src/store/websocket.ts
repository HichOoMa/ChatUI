import { create } from "zustand";
import { connectSocket, disconnectSocket } from "../websocket/init";

interface IWsStore {
  ws: WebSocket | null;
  connectWebsocket: () => void;
  disconnectWebsocket: () => void;
}

export const useWsStore = create<IWsStore>((set, get) => ({
  // track websocket instance
  ws: null,
  connectWebsocket: () => {
    const { ws } = get();
    if (ws && ws.readyState === WebSocket.OPEN) {
      const websocket = connectSocket();
      set(() => ({ ws: websocket }));
    }
  },
  disconnectWebsocket: () => {
    const { ws } = get();
    if (ws && ws.readyState === WebSocket.OPEN) {
      disconnectSocket(ws);
    }
  }
}));
