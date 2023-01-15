import { Application } from 'pixi.js';
import { Grass } from './blocks/grass';
import { Water } from './blocks/water';
import { Residential } from './blocks/residential';
import { EBlocks } from '../enums/blocks';

export class Cell {
  app: Application;
  cell: number;
  rowIndex: number;
  cellIndex: number;

  constructor(app: Application) {
    this.app = app;
  }

  switch() {
    switch (this.cell) {
      case EBlocks.RESIDENTIAL:
        const residential = new Residential(this.app);
        residential.draw(this.rowIndex, this.cellIndex);
        break;
      case EBlocks.GRASS:
        const grass = new Grass(this.app);
        grass.draw(this.rowIndex, this.cellIndex);
        break;
      case EBlocks.WATER:
        const water = new Water(this.app);
        water.draw(this.rowIndex, this.cellIndex);
        break;
      default:
    }
  }

  draw(rowIndex: number, cellIndex: number) {
    this.cell = this.app.world[rowIndex][cellIndex];
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
    this.switch();
    this.tick();
  }

  tick() {
    this.app.ticker.add(() => {
      const cell = this.app.world[this.rowIndex][this.cellIndex];
      if (cell === this.cell) return;
      this.cell = cell;
      this.switch();
    });
  }
}