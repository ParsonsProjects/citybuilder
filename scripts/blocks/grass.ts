import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';
import world from '../../data/map';

export class Grass extends Block {
  type = EBlocks.GRASS;

  constructor(app: Application) {
    super(app, 0x1d6b48);
  }

  onButtonOver() {
    this.color = 0xb0d19f;
  }

  onButtonOut() {
    this.color = 0x1d6b48;
  }

  onButtonDown() {
    world[this.rowIndex][this.cellIndex] = EBlocks.RESIDENTIAL;
  }
}
