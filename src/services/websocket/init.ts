let websocket: WebSocket;

export const connectSocket = () => {
  websocket = new WebSocket('ws://localhost:5000/ws', 'echo-protocol');
  websocket.onopen = () => {
    console.log('connected');
    console.log(websocket);
  };
  websocket.onclose = () => {
    console.log('disconnected');
  };
  websocket.onerror = (err) => {
    console.log('error', err);
  };
  websocket.onmessage = (message) => {
    console.log('message :', message);
  };
};

export const disconnectSocket = () => {
  websocket.close();
};
