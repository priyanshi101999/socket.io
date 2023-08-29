const io = require('socket.io')(3000, {
    cors: {

        // Allow connections from this origin
        origin: ["http://localhost:4200"]
    }
});


// Set up a connection event handler for when clients connect to the socket server.
io.on('connection', socket => {


    // Listen for 'draw-start' events from clients.
    socket.on('draw-start', (data) => {

        // Broadcast the 'draw-broadcast-start' event to all connected clients except the sender.
        socket.broadcast.emit('draw-broadcast-start', { x: data.x, y: data.y })
    })

    // Listen for 'draw-move' events from clients.
    socket.on('draw-move', (data) => {

        // Broadcast the 'draw-broadcast-move' event to all connected clients except the sender.
        socket.broadcast.emit('draw-broadcast-move', { x: data.x, y: data.y })
    })

})






