import { Graphics, Application } from 'pixi.js';
import { EBlocks } from '../../enums/blocks';
import { INeighbours } from '../../interfaces';
import { blocks } from '../../data';

export class Block extends Graphics {
  width = 25;
  height = 25;
  color: number;
  app: Application;
  element: Graphics;
  rowIndex: number;
  cellIndex: number;
  neighbours: INeighbours;
  adjacent: INeighbours;
  type: EBlocks;
  coverage = 0;

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

    const rowLength = blocks.length;
    const cellLength = blocks[this.rowIndex].length;
    if (row > rowLength - 1 || cell > cellLength - 1) return EBlocks.EMPTY;

    return blocks[row][cell];
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
    return {
      enabled:
        !!this.adjacent.find(
          (item) =>
            item.type === EBlocks.POWER ||
            ([EBlocks.ROAD, EBlocks.RESIDENTIAL].includes(item.type) &&
              item.power.enabled)
        ) && [EBlocks.ROAD, EBlocks.RESIDENTIAL].includes(this.type),
    };
  }

  getPolice() {
    const levels = this.neighbours.map((item) => item?.police?.coverage || 0);

    return {
      coverage: this.coverage || Math.max(Math.max(...levels) - 1, 0),
    };
  }

  updater() {
    blocks[this.rowIndex][this.cellIndex].power = this.getPower();
    blocks[this.rowIndex][this.cellIndex].police = this.getPolice();
  }

  add() {
    if (!blocks[this.rowIndex]) blocks[this.rowIndex] = [];
    blocks[this.rowIndex][this.cellIndex] = {
      type: this.type,
      power: { enabled: false },
      police: { coverage: this.coverage },
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
