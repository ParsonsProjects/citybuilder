import { Application } from 'pixi.js';
import world from '../../data/map';
import { Cell } from './cell';
import { utilities } from '../../data';

export class World {
  async init(container: HTMLElement) {
    const app = new Application();
    await app.init({ autoStart: false });

    container.appendChild(app.canvas);

    app.ticker.add(() => {
      utilities.power.usage = 0;
    });

    world.forEach((row, rowIndex) => {
      row.forEach((_, cellIndex) => {
        const cell = new Cell(app);
        cell.draw(rowIndex, cellIndex);
      });
    });

    app.ticker.start();
  }
}
