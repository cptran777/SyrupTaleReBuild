import { GameObject } from '../GameObject';

export class Character extends GameObject {
  attack = 0;
  defense = 0;
  health = 0;
  maxHealth = 0;

  isAlive(): boolean {
    return this.health > 0;
  }
}