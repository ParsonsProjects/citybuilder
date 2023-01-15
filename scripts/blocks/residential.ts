import { Application } from 'pixi.js';
import { Block } from './block';

export class Residential extends Block {
  constructor(app: Application) {
    super(app, 0xb0d19f);
  }

  ticker() {
    
  }
}
