import { Shape } from '../../vendor/createjs';

export class ForestDungeon {
  background: Shape;

  constructor(backgroundAsset: HTMLImageElement, canvas: HTMLCanvasElement) {
    const background = new Shape();
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    background.graphics
      .beginBitmapFill(backgroundAsset)
      .drawRect(0, 0, canvasWidth + backgroundAsset.width, canvasHeight + backgroundAsset.height);
    background.y = -105;
    
    this.background = background;
  }
}