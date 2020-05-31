import React, { Component } from 'react';
import { SyrupTale } from '../engine/SyrupTale';
import SocketIOClient from 'socket.io-client';

export class GameWindow extends Component {
  engine!: SyrupTale;
  socket!: SocketIOClient.Socket;
  
  componentDidMount() {
    this.socket = SocketIOClient('/');
    this.engine = new SyrupTale('syrup-tale').init();
    this.engine.stage.update();

    this.socket.on('RoomNotFound', () => console.log('Unable to find room'));
    this.socket.on('ClientId', (data: { id: string }) => console.log('Client Id received: ', data.id));
  }

  render() {
    return (
      <section>
        <canvas id="syrup-tale"></canvas>
      </section>
    );
  }  
}