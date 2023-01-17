import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';

export class Police extends Block {
  type = EBlocks.POLICE;
  coverage = 5;

  constructor(app: Application) {
    super(app, 0x004fcf);
  }
}