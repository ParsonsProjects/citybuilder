import { Application, Ticker } from 'pixi.js';
import world from '../../data/map';
import { Cell } from './cell';
import { blocks } from '../../data';
import { utilities } from '../../data';

export class World {
  init() {
    const app = new Application();
    const ticker = Ticker.shared;
    ticker.autoStart = false;

    app.ticker = ticker;

    document.body.innerHTML = '';
    document.body.appendChild(app.view);

    ticker.add(() => {
      utilities.power.total = 0;
      utilities.power.usage = 0;
    });

    world.forEach((row, rowIndex) => {
      row.forEach((_, cellIndex) => {
        const cell = new Cell(app);
        cell.draw(rowIndex, cellIndex);
      });
    });

    ticker.start();
  }
}

setTimeout(() => {
  // console.log(blocks);
}, 500);
