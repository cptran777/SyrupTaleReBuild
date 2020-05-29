import React, { Component } from 'react';
import { Stage, Shape, LoadQueue } from '../vendor/createjs';

export class TestCanvas extends Component {
  componentDidMount() {
    const stage = new Stage('my-canvas');
    const shape = new Shape();

    // Manifest will create and store background image for future use. Looks like 
    // the render will need to be adjusted to align the image properly. 
    var manifest = [
      { src: '/assets/images/background.png', id: 'background' }
    ];

    // Canvas width and height stored in var w and h for future use. 
    const canvasWidth = (stage.canvas as HTMLCanvasElement).width;
    const canvasHeight = (stage.canvas as HTMLCanvasElement).height;

    // Loader will render the necessary items 
    const loader = new LoadQueue();
    loader.addEventListener('complete', () => {
      // Creates background image. 
      const background = new createjs.Shape();
      const backgroundImg: any = loader.getResult('background');
      console.log(backgroundImg);
      background.graphics.beginBitmapFill(backgroundImg).drawRect(0, 0, canvasWidth + backgroundImg.width, canvasHeight + backgroundImg.height);
      stage.addChild(background);

      // Adjustment to line the image mentioned above. 
      background.y = -105;
      stage.update();
    });
    loader.loadManifest(manifest, true, 'assets/images/');

    shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
    stage.addChild(shape);
    stage.update();
  }

  render() {
    return (
      <div>
        <h1>Hello darkness my old friend</h1>
        <canvas id="my-canvas"></canvas>
      </div>
    );
  }
}