import { Sprite } from "../../vendor/createjs";

export class GameObject {
  private _asset: Object;
  private _sprite!: Sprite;

  constructor(objectAsset: Object) {
    this._asset = objectAsset;
  }

  /**
   * Returns the position of the object on the canvas. Position is defined as a duple array of x
   * and y coordinates: [x, y]
   */
  getPosition(): [number, number] {
    return [this._sprite.x, this._sprite.y];
  }

  create(): GameObject {
    return this;
  }
}