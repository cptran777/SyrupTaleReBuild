import { AssetKeys } from './assets';

const spriteSheetData =  [
  // Stand
  [30, 0, 48, 82, 0, 32],
  // Run
  [86, 0, 48, 82, 0, 32],
  [142, 0, 48, 82, 0, 32],
  [198, 0, 48, 82, 0, 32],
  [262, 0, 48, 82, 0, 32],
  [318, 0, 48, 82, 0, 32],
  [384, 0, 48, 82, 0, 32],
  // Slash
  [0, 94, 48, 82, 0, 32],
  [48, 94, 48, 82, 0, 32],
  [96, 94, 60, 82, 0, 32],
  [158, 94, 50, 82, 0, 32],
  [218, 94, 48, 82, 0, 32],
  [272, 94, 50, 82, 0, 32],
  [326, 94, 50, 82, 0, 32],
  // Dead
  [316, 170, 48, 82, 0, 32],
  [380, 170, 60, 82, 0, 32],
  [380, 170, 60, 82, 0, 32],
];

export const playerData = {
  sprite: {
		framerate: 30,
		images: [AssetKeys.playerSprite],
		frames: spriteSheetData,
		// x, y, width, height, imageIndex*, regX*, regY*
		// {regX: 0, height: 92, count: 24, regY: 0, width: 64},
		animations: {
			stand: [0],
			run: [1, 6, 'run', 0.25],
			slash: [7, 13, 'stand', 0.25],
			dead: [14, 16, 'dead', 0.05]
		}
  }
};
