import { Application } from 'pixi.js';
import { Zone } from './zone';
import { cells } from '../../data';
import { EBlocks } from '../../enums/blocks';

export class Residential extends Zone {
  type = EBlocks.RESIDENTIAL;

  constructor(app: Application) {
    super(app, 0xb0d19f);
    setTimeout(() => {
      console.log(cells);
    }, 500);
  }

  ticker() {}
}
