import messageWsHandler from "./messageWsHandler";
import { wsMessage } from "../models/messages";

let websocket: WebSocket;

export const connectSocket = () => {
  websocket = new WebSocket("ws://localhost:5000/ws", "echo-protocol");
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
    messageWsHandler(message);
  };
};

export const disconnectSocket = () => {
  websocket.close();
};

export const sendMessage = (message: string, receiverId: string) => {
  let messageObject: wsMessage = { opposite_id: receiverId, content: message };
  websocket.send(JSON.stringify(messageObject));
};
