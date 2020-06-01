import { Player } from '../objects/characters/Player';
import { Mob } from '../objects/characters/mobs/Mob';

export class ForestDungeon {
  // Note: We only need the min/max X since the map is a sidescrolling 2D entity, meaning that 
  // there is no way for a player to move beyond the X and Y limits.
  static minX = 0;
  static maxX = 1800;

  private _players: Array<Player>;
  private _mobs: Array<Mob>;

  constructor() {
    this._players = [];
    this._mobs = [];
  }

  addPlayer(player: Player): void {
    this._players.push(player);
  }

  addMob(mob: Mob): void {
    this._mobs.push(mob);
  }
}
