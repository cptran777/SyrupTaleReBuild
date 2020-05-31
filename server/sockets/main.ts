export function initSocketHandler(io: SocketIO.Server): void {
  io.on('connection', (socket => {
    console.log('client connection');
    socket.emit('Connected');

    socket.on('disconnect', () => console.log('Hello darkness my old friend'));
  }));
}