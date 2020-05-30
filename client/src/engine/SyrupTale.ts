import { Stage, LoadQueue, Shape } from "../vendor/createjs";

export class SyrupTale {
  private static manifest = [
    { src: 'background.png', id: 'background' }
  ];

  stage: Stage;
  loader: LoadQueue;

  constructor(gameWindowId: string) {
    this.stage = new Stage(gameWindowId);
    this.loader = new LoadQueue();
  }

  init(): SyrupTale {
    this.loader.addEventListener('complete', () => {
      // Canvas width and height stored in var w and h for future use. 
      const canvasWidth = (this.stage.canvas as HTMLCanvasElement).width;
      const canvasHeight = (this.stage.canvas as HTMLCanvasElement).height;

      // Creates background image. 
      const background = new Shape();
      const backgroundImg = this.loader.getResult('background') as HTMLImageElement;
      background.graphics.beginBitmapFill(backgroundImg).drawRect(0, 0, canvasWidth + backgroundImg.width, canvasHeight + backgroundImg.height);
      this.stage.addChild(background);

      // Adjustment to line the image mentioned above. 
      background.y = -105;
      this.stage.update();
    });

    this.loader.loadManifest(SyrupTale.manifest, true, 'assets/images/');
    return this;
  }
}
