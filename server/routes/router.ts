import path from 'path';
import express from 'express';

export function router(app: ReturnType<typeof express>): void {
  app.get('/api', (_req, _res) => {});

  app.get('/test', (_req, res) => {
    console.log('/test received');
    res.send('ok');
  });

  app.get('/*', (_req, res) => {
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
  });
}
