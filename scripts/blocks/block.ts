import { Graphics, Application } from 'pixi.js';

export class Block extends Graphics {
  width = 50;
  height = 50;
  color: number;
  app: Application;
  element: Graphics;
  rowIndex: number;
  cellIndex: number;

  constructor(app: Application, color: number) {
    super();
    this.color = color;
    this.app = app;
  }

  draw(rowIndex: number, cellIndex: number) {
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
    this.app.ticker.add(() => this.update());
    this.app.stage.addChild(this);
    this.enable();
  }

  getNeighbourOne() {
    const row = this.rowIndex - 1;
    const cell = this.cellIndex - 1;
    if (row < 0 || cell < 0) return;
    const block = this.app.world[row][cell];
  }

  getNeighbours() {
    this.getNeighbourOne();
  }

  update() {
    this.getNeighbours();
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
