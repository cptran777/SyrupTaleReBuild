import { v4 as uuid} from 'uuid';
import { SyrupTale } from '../../../engine/SyrupTale';

/**
 * Represents a single room or lobby that clients can join into. In a proper multiplayer setup, this
 * would probably be handled on a separate machine.
 */
export class GameRoom {
  static sizeLimit = 2;
  private _id = '0';
  private _connections: Array<string>;
  private _game: SyrupTale;

  constructor() {
    this._id = uuid();
    this._connections = [];
    this._game = new SyrupTale();
  }

  init(): void {
    
  }

  getId(): string {
    return this._id;
  }

  getGame(): SyrupTale {
    return this._game;
  }

  hasConnection(id: string): boolean {
    return this._connections.includes(id);
  }

  getConnectionCount(): number {
    return this._connections.length;
  }

  addConnection(id: string): void {
    this._connections.push(id);
  }

  removeConnection(id: string): void {
    this._connections = this._connections.filter(connection => connection !== id);
  }
}

export class GameRooms {
  private _rooms: Record<string, GameRoom>;
  private _connectionIdMappedToRoomId: Record<string, string>;

  constructor() {
    this._rooms = {};
    this._connectionIdMappedToRoomId = {};
  }

  getRoomById(id: string): GameRoom | null {
    return this._rooms[id] || null;
  }

  addRoom(room: GameRoom): void {
    const id = room.getId();
    this._rooms[id] = room;
  }

  removeRoom(room: GameRoom | string): void {
    const id = typeof room === 'string' ? room : room.getId();
    delete this._rooms[id];
  }

  /**
   * Adds a socket connection by id to a specific room
   * @param connectionId - the id to identifier the connection
   * @param roomId - optional, an id for a room to try to connect to
   */
  addConnection(connectionId: string, roomId?: string): string | void {
    // If roomId is defined, will try to add to that room, otherwise will try to add to any room
    // that isn't full
    if (roomId) {
      const room = this._rooms[roomId];
      if (room.getConnectionCount() < GameRoom.sizeLimit) {
        room.addConnection(connectionId);
        this._connectionIdMappedToRoomId[connectionId] = roomId;
        return roomId;
      }
    } else {
      const roomIds = Object.keys(this._rooms);
      let foundRoom = false;

      for (let x = 0; x < roomIds.length && !foundRoom; x++) {
        const tryRoom = this._rooms[roomIds[x]];
        if (tryRoom.getConnectionCount() < GameRoom.sizeLimit) {
          tryRoom.addConnection(connectionId);
          this._connectionIdMappedToRoomId[connectionId] = tryRoom.getId();
          return tryRoom.getId();
        }
      }

      const newRoom = new GameRoom();
      newRoom.addConnection(connectionId);
      this.addRoom(newRoom);
      this._connectionIdMappedToRoomId[connectionId] = newRoom.getId();

      return newRoom.getId();
    }
  }

  getRoomForConnectionId(connectionId: string): GameRoom | null {
    const roomId = this._connectionIdMappedToRoomId[connectionId];
    return roomId ? this.getRoomById(roomId) : null;
  }
}
