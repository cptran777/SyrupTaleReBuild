"use strict";
/****************************** INIT DEPENDENCIES ******************************/
import express from 'express';
import bodyparser from 'body-parser';
import socketIO from 'socket.io';
import http from 'http';
import { router } from './routes/router';
import { GameSockets } from './sockets/main';

require('dotenv').config();

// init server application using express
const app = express();

// /***************************** INIT CUSTOM MODULES *****************************/

// /******************************* INIT MIDDLEWARE *******************************/

// // Should allow us to use the assets inside the public folder in the client side codes
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyparser.json());

router(app);

// /********************************* INIT SERVER *********************************/

const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3001;

const gameSockets = new GameSockets().init(io);

gameSockets && console.log('Sockets setup successfully');

server.listen(port, () => {
  console.log('Listening on port', port);
});
