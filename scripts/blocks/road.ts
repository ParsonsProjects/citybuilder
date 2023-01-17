import { Application } from 'pixi.js';
import { Block } from './block';
import { EBlocks } from '../../enums/blocks';

export class Road extends Block {
  type = EBlocks.ROAD;

  constructor(app: Application) {
    super(app, 0xb3b3b3);
  }
}
