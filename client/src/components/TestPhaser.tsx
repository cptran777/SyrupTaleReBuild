import React, { Component } from 'react';
import Phaser from 'phaser';

export class PhaserTesting extends Component {
  preload(this: Phaser.Scene) {
    this.load.image('background', '/assets/images/background.png');
  }

  create(this: Phaser.Scene) {
    this.add.image(400, 300, 'background');
  }

  createAndAppendGame() {
    const config = {
      parent: 'game-container',
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 200 }}
      },
      scene: {
        preload: this.preload,
        create: this.create
      }
    };
    const game = new Phaser.Game(config);
  }

  componentDidMount() {
    this.createAndAppendGame();
  }

  render() {
    return (
      <section id="game-container">
      </section>
    );
  }
}