import { Application, Ticker } from 'pixi.js';
import world from '../../data/map';
import { Cell } from './cell';

export class World {
  init() {
    const app = new Application();
    const ticker = Ticker.shared;
    app.ticker = ticker;

    document.body.innerHTML = '';
    document.body.appendChild(app.view);

    world.forEach((row, rowIndex) => {
      row.forEach((_, cellIndex) => {
        const cell = new Cell(app);
        cell.draw(rowIndex, cellIndex);
      });
    });
  }
}
