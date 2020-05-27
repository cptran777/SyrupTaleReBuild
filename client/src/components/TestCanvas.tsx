import React, { Component } from 'react';
import { Stage, Shape } from '../vendor/easel';

export class TestCanvas extends Component {
  componentDidMount() {
    const stage = new Stage('my-canvas');
    const shape = new Shape();
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