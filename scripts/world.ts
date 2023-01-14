import { Application } from 'pixi.js';
import world from '../data/world';
import { Grass } from './blocks/grass';
import { Water } from './blocks/water';
import { EBlocks } from '../enums/blocks';

export class World {
  build() {
    const app = new Application();

    document.body.innerHTML = '';
    document.body.appendChild(app.view);

    world.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        switch (cell) {
          case EBlocks.GRASS:
            const grass = new Grass(app);
            grass.draw(rowIndex, cellIndex);
            break;
          case EBlocks.WATER:
            const water = new Water(app);
            water.draw(rowIndex, cellIndex);
            break;
          default:
        }
      });
    });
  }
}
