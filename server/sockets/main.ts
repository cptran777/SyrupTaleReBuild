import { GameRooms } from './rooms/room';
import { v4 as uuid } from 'uuid';

export class GameSockets {
  private _gameRooms: GameRooms;

  constructor() {
    this._gameRooms = new GameRooms();
  }

  init(io: SocketIO.Server): GameSockets {
    io.on('connection', (socket) => {
      console.log('client connection');
      socket.emit('Connected');

      const clientId = uuid();
      const roomId = this._gameRooms.addConnection(clientId);
      
      if (!roomId) {
        socket.emit('RoomNotFound');
      } else {
        socket.emit('ClientId', { id: clientId });
      }

      socket.on('disconnect', () =>
        console.log('Hello darkness my old friend', clientId)
      );
    });

    return this;
  }
}
