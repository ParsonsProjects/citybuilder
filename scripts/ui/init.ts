import { Power } from './power';

export class UI {
  wrapper: Element;

  init() {
    this.createWrapper();
    new Power(this.wrapper);
  }

  createWrapper() {
    this.wrapper = document.createElement('div');
    document.body.appendChild(this.wrapper);
  }
}
