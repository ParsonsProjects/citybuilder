import { Application } from 'pixi.js';
import { Zone } from './zone';
import { EBlocks } from '../../enums/blocks';
import { utilities } from '../../data';
import { blocks } from '../../data';

export class Residential extends Zone {
  type = EBlocks.RESIDENTIAL;
  usage = 10;
  hasPower = false;
  newTotal = 0;

  constructor(app: Application) {
    super(app, 0xb0d19f);
    utilities.power.usage += this.usage;
    setTimeout(() => {
      console.log(blocks);
    }, 500);
  }

  getPowerLevel() {
    if (this.block?.power?.output < 0) this.color = 0x6c8301;
  }

  ticker() {
    this.getPowerLevel();
  }
}
