import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io("http://localhost:3000");

        // this.socket.on('return-sessionid', (data) => {
        //     console.log("got session id:", data);
        // });
    }

    requestSessionID() {
        this.socket.emit('request-sessionid')
    }

    message(message) {
        this.socket.emit('my message', message);
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export default new SocketioService();