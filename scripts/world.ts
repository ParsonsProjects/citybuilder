import { Application, Ticker } from 'pixi.js';
import world from '../data/world';
import { Cell } from './cell';

export class World {
  build() {
    const app = new Application();
    const ticker = Ticker.shared;
    app.world = world;
    app.ticker = ticker;

    document.body.innerHTML = '';
    document.body.appendChild(app.view);

    app.world.forEach((row, rowIndex) => {
      row.forEach((_, cellIndex) => {
        const cell = new Cell(app);
        cell.draw(rowIndex, cellIndex);
      });
    });
  }
}
