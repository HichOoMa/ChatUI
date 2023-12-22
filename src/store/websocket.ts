import { create } from "zustand";
import { connectSocket, disconnectSocket } from "../websocket/init";

interface IWebsocket {
  ws: WebSocket;
  connectWebsocket: () => void;
  disconnectWebsocket: () => void;
}

export const useWsStore = create((set, get) => ({
  ws: null,
  connectWebsocket: () => {
    if ( ws === null ) {
      let websocket= connectSocket()
      set(() => ({ ws: websocket }))
    }
  },
  disconnectWebsocket: () => {
    if (ws !== null) {
      const ws: WebSocket = get("ws");
      disconnectSocket(ws)
    }
  }
}))
