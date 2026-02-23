import { Application } from 'pixi.js';
import world from '../../data/map';
import { Cell } from './cell';
import { blocks } from '../../data';
import { utilities } from '../../data';

export class World {
  async init() {
    const app = new Application();
    await app.init({ autoStart: false });

    document.body.innerHTML = '';
    document.body.appendChild(app.canvas);

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

setTimeout(() => {
  // console.log(blocks);
}, 500);
