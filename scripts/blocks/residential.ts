import { Application } from 'pixi.js';
import { Zone } from './zone';
import { EBlocks } from '../../enums/blocks';
import { utilities } from '../../data';

export class Residential extends Zone {
  type = EBlocks.RESIDENTIAL;
  usage = 10;
  hasPower = false;
  newTotal = 0;

  constructor(app: Application) {
    super(app, 0xb0d19f);

    const currentUsagePower = utilities.power.usage;
    this.newTotal = currentUsagePower + this.usage;
    utilities.power.usage = this.newTotal;
  }

  getPowerLevel() {
    const totalPower = utilities.power.total;
    this.hasPower = this.newTotal <= totalPower;
    if (!this.hasPower) this.color = 0x6c8301;
  }

  ticker() {
    this.getPowerLevel();
  }
}
