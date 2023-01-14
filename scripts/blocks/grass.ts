import { Application } from 'pixi.js';
import { Block } from './block';

export class Grass extends Block {
  constructor(app: Application) {
    super(app, 0x006aff);
  }
}
