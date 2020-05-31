import { Sprite, SpriteSheet } from '../../vendor/createjs';
import { v4 as uuid } from 'uuid';
import { ISpriteParameters } from '../../types/vendor/createjs-easel';

export interface IGameObjectCreateOptions {
  defaultAnimation?: string;
  initialPosition?: { x: number, y: number };
}

export class GameObject {
  private _objectId: string;
  private _asset: Object;
  private _sprite!: Sprite;
  /**
   * The position of a GameObject is different than the sprite position. While the sprite position
   * determines the object's position on the rendered canvas, this position represents the object's
   * overall position in the given world.
   */
  private _position: { x: number, y: number };

  constructor(objectAsset: Object) {
    this._asset = objectAsset;
    this._objectId = uuid().slice(-12);
    this._position = { x: 0, y: 0 };
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

  create(spriteParameters: ISpriteParameters, options: IGameObjectCreateOptions): GameObject {
    const { defaultAnimation, initialPosition } = options;
    const spriteSheet = new SpriteSheet(spriteParameters);
    const sprite = new Sprite(spriteSheet, defaultAnimation);

    if (initialPosition) {
      sprite.x = initialPosition.x;
      sprite.y = initialPosition.y;
    }

    this._sprite = sprite;
    return this;
  }
}