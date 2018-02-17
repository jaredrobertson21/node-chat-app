const path = require('path');
const http = require('http');
const express= require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// listens for a new connection
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Mike@example.com',
        text: "Hey, what's up?",
        createdAt: 123
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createEmail', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on ${port}`);
});