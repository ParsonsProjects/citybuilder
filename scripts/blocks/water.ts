import { Application } from 'pixi.js';
import { Block } from './block';

export class Water extends Block {
  constructor(app: Application) {
    super(app, 0x1d6b48);
  }
}
