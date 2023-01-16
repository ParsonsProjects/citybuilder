import { Application } from 'pixi.js';
import { Block } from './block';

export class Zone extends Block {
  constructor(app: Application, color: number) {
    super(app, color);
  }
}
