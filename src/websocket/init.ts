import { useAuthStore } from "../store/auth";
import { useProfileStore } from "../store/profile";

let websocket: WebSocket;

export const connectSocket = () => {
  websocket = new WebSocket("ws://localhost:5000/ws", [useAuthStore.getState().token]);
  websocket.onopen = () => {
    console.log("connected");
    console.log(websocket);
  };
  websocket.onclose = () => {
    console.log("disconnected");
  };
  websocket.onerror = (err) => {
    console.log("error", err);
  };
  websocket.onmessage = (message) => {
    console.log("message", message);
    useProfileStore.getState().handleNewMessage(message, useAuthStore.getState().userId);
  };
  return websocket;
};

export const disconnectSocket = (ws: WebSocket) => {
  ws.close();
};
