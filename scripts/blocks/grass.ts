import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';

export class Grass extends Block {
  type = EBlocks.GRASS;

  constructor(app: Application) {
    super(app, 0x1d6b48);
  }

  onButtonOver() {
    this.color = 0xb0d19f;
    // this.app.world[this.rowIndex][this.cellIndex] = EBlocks.RESIDENTIAL;
  }

  onButtonOut() {
    this.color = 0x1d6b48;
    // this.app.world[this.rowIndex][this.cellIndex] = EBlocks.GRASS;
  }
}
