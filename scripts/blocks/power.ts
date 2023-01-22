import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';
import { utilities } from '../../data';

export class Power extends Block {
  type = EBlocks.POWER;
  output = 100;

  constructor(app: Application) {
    super(app, 0x3d3d3d);
    utilities.power.total += this.output;
  }
}
