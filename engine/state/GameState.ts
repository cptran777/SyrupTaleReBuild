export interface IGameStateObject {
}

export class GameState {
  constructor() {}

  create(_fromSavedState: IGameStateObject): GameState {
    return this;
  }
}