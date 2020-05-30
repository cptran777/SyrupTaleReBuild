import React, { Component } from 'react';
import { SyrupTale } from '../engine/SyrupTale';

export class GameWindow extends Component {
  engine!: SyrupTale;
  
  componentDidMount() {
    this.engine = new SyrupTale('syrup-tale').init();
    this.engine.stage.update();
  }

  render() {
    return (
      <section>
        <canvas id="syrup-tale"></canvas>
      </section>
    );
  }  
}