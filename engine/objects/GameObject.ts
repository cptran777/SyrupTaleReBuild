import { v4 as uuid } from 'uuid';

export class GameObject {
  private _objectId: string;
  /**
   * The position of a GameObject is different than the sprite position. While the sprite position
   * determines the object's position on the rendered canvas, this position represents the object's
   * overall position in the given world.
   */
  private _position: { x: number, y: number };

  constructor() {
    this._objectId = uuid().slice(-12);
    this._position = { x: 0, y: 0 };
  }

  /**
   * Gives the ID of the object. Set as a getter to reduce the likelihood of accidental overrides
   */
  getId(): string {
    return this._objectId;
  }

  /**
   * Returns the position of the object relative to the "map world"
   */
  getPosition(): { x: number, y: number } {
    const { x, y } = this._position;
    return { x, y };
  }

  /**
   * Sets the position of the object relative to the virtual "map world"
   * @param position - new position to set
   */
  setPosition(position: { x: number, y: number }): void {
    this._position.x = position.x;
    this._position.y = position.y;
  }
}