import { GameState } from './state/GameState';
import { ForestDungeon } from './maps/ForestDungeon';

/**
 * Main game logic class, agnostic of server and client logics. This should make the logic portion
 * of the game shareable between both, with hooks to determine server/client behavior based on game
 * events for the unique behavior of each side without interfering with the core behavior of the
 * game itself
 */
export class SyrupTale {
  private _state: GameState;
  private _map: ForestDungeon;

  constructor() {
    this._map = new ForestDungeon();
  }

  init(): void {}

  /**
   * Executes a round of the game logic loop
   */
  loop(): void {

  }
}