import { Application } from 'pixi.js';
import { Block } from './block';

export class Water extends Block {
  constructor(app: Application) {
    super(app, 0x006aff);
  }

  onButtonOver() {
    console.log('water')
  }
}
