import { Application } from 'pixi.js';
import { Grass } from '../blocks/grass';
import { Water } from '../blocks/water';
import { Power } from '../blocks/power';
import { Road } from '../blocks/road';
import { Police } from '../blocks/police';
import { Residential } from '../blocks/residential';
import { EBlocks } from '../../enums/blocks';
import world from '../../data/map';

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
      case EBlocks.POWER:
        const power = new Power(this.app);
        power.draw(this.rowIndex, this.cellIndex);
        break;
      case EBlocks.ROAD:
        const road = new Road(this.app);
        road.draw(this.rowIndex, this.cellIndex);
        break;
      case EBlocks.POLICE:
        const police = new Police(this.app);
        police.draw(this.rowIndex, this.cellIndex);
        break;
      default:
    }
  }

  draw(rowIndex: number, cellIndex: number) {
    this.cell = world[rowIndex][cellIndex];
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
    this.switch();
    this.tick();
  }

  tick() {
    this.app.ticker.add(() => {
      const cell = world[this.rowIndex][this.cellIndex];
      if (cell === this.cell) return;
      this.cell = cell;
      this.switch();
    });
  }
}
