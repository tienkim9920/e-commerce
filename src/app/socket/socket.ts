import io from 'socket.io-client';

var connectionOptions = {
    "transports": ["websocket"]
};

// const socket = io('http://localhost:4000', connectionOptions);
const socket = io('https://tk-ecommerce.herokuapp.com', connectionOptions);

export default socket
