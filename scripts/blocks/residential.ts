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
  setPower = 0;

  constructor(app: Application) {
    super(app, 0xb0d19f);
  }

  setPowerLevel() {
    const currentUsagePower = utilities.power.usage;
    this.newTotal = currentUsagePower + this.usage;
    utilities.power.usage = this.newTotal;
  }

  disablePower() {
    this.color = 0x6c8301;
  }

  enablePower() {
    this.color = 0xb0d19f;
  }

  getPowerLevel() {
    // this.hasPower = this.block?.power?.enabled;
    if (!this.block?.power?.enabled) return this.disablePower();
    this.setPowerLevel();
    // if (this.block?.power?.enabled) return this.enablePower();

    const totalPower = utilities.power.total;
    this.hasPower = this.newTotal <= totalPower;
    // if (!this.hasPower) this.disablePower();
    if (this.hasPower) this.enablePower();
    // if (this.hasPower && this.block?.power?.enabled) this.enablePower();
  }

  ticker() {
    this.getPowerLevel();
  }
}
