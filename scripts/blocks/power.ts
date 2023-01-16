import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';

export class Power extends Block {
  type = EBlocks.POWER;

  constructor(app: Application) {
    super(app, 0x3d3d3d);
  }
}
