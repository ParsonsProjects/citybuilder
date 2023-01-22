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
    this.newTotal = utilities.power.usage + this.usage;
    utilities.power.usage = this.newTotal;
  }

  disablePower() {
    this.color = 0x6c8301;
  }

  enablePower() {
    this.color = 0xb0d19f;
  }

  getPowerLevel() {
    if (!this.block?.power?.enabled) return this.disablePower();
    this.setPowerLevel();
    const totalPower = utilities.power.total;
    this.hasPower = this.newTotal <= totalPower;
    if (!this.hasPower) this.disablePower();
    if (this.hasPower && this.block?.power?.enabled) this.enablePower();
  }

  ticker() {
    this.getPowerLevel();
  }
}
