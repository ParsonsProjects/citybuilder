import { Graphics, Application } from 'pixi.js';
import { EBlocks } from '../../enums/blocks';
import { cells } from '../../data';

export class Block extends Graphics {
  width = 50;
  height = 50;
  color: number;
  app: Application;
  element: Graphics;
  rowIndex: number;
  cellIndex: number;
  neighbours: Array<{ hasPower: boolean }>;
  adjacent: Array<{
    power: { enabled: boolean; distance: number };
    type: EBlocks;
  }>;
  type: EBlocks;

  constructor(app: Application, color: number) {
    super();
    this.color = color;
    this.app = app;
  }

  draw(rowIndex: number, cellIndex: number) {
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
    this.add();
    this.app.ticker.add(() => this.update());
    this.app.stage.addChild(this);
    this.enable();
  }

  getNeighbour(rowIndex, cellIndex) {
    const row = this.rowIndex - rowIndex;
    const cell = this.cellIndex - cellIndex;
    if (row < 0 || cell < 0) return EBlocks.EMPTY;

    const rowLength = cells.length;
    const cellLength = cells[this.rowIndex].length;
    if (row > rowLength - 1 || cell > cellLength - 1) return EBlocks.EMPTY;

    return cells[row][cell];
  }

  getNeighbours() {
    this.neighbours = [
      this.getNeighbour(1, 1),
      this.getNeighbour(1, 0),
      this.getNeighbour(1, -1),
      this.getNeighbour(0, 1),
      this.getNeighbour(0, -1),
      this.getNeighbour(-1, 1),
      this.getNeighbour(-1, 0),
      this.getNeighbour(-1, -1),
    ];

    this.adjacent = [
      this.neighbours[1],
      this.neighbours[3],
      this.neighbours[4],
      this.neighbours[6],
    ];
  }

  update() {
    this.getNeighbours();
    this.updater();
    this.ticker();
    this.clear();
    this.beginFill(this.color);

    this.drawRect(
      this.cellIndex * this.width,
      this.rowIndex * this.height,
      this.width,
      this.height
    );

    this.endFill();
  }

  getPower() {
    const distances = this.adjacent.map((item) => item?.power?.distance || 0);

    return {
      enabled: !!this.adjacent.find((item) => item.type === EBlocks.POWER),
      distance: Math.max(...distances),
    };
  }

  updater() {
    cells[this.rowIndex][this.cellIndex].power = this.getPower();
  }

  add() {
    if (!cells[this.rowIndex]) cells[this.rowIndex] = [];
    cells[this.rowIndex][this.cellIndex] = {
      type: this.type,
      power: { enabled: false, distance: 999 },
    };
  }

  enable() {
    this.interactive = true;

    this
      // Mouse & touch events are normalized into
      // the pointer* events for handling different
      // button events.
      .on('pointerdown', this.onButtonDown)
      .on('pointerup', this.onButtonUp)
      .on('pointerupoutside', this.onButtonUp)
      .on('pointerover', this.onButtonOver)
      .on('pointerout', this.onButtonOut);
  }

  ticker() {}

  onButtonDown() {}

  onButtonUp() {}

  onButtonOver() {}

  onButtonOut() {}
}
