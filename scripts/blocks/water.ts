import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';

export class Water extends Block {
  type = EBlocks.WATER;

  constructor(app: Application) {
    super(app, 0x006aff);
  }
}
