import { Stage, LoadQueue, Shape } from "../vendor/createjs";
import { ForestDungeon } from './maps/ForestDungeon';

export class SyrupTale {
  private static manifest = [
    { src: 'background.png', id: 'background' }
  ];

  stage: Stage;
  loader: LoadQueue;
  map!: ForestDungeon;

  constructor(gameWindowId: string) {
    this.stage = new Stage(gameWindowId);
    this.loader = new LoadQueue();
  }

  init(): SyrupTale {
    this.loader.addEventListener('complete', () => {
      const map = new ForestDungeon(
        this.loader.getResult('background') as HTMLImageElement, 
        this.stage.canvas as HTMLCanvasElement
      );
      
      this.map = map;
      this.stage.addChild(map.background);
      this.stage.update();
    });

    this.loader.loadManifest(SyrupTale.manifest, true, 'assets/images/');
    return this;
  }
}
