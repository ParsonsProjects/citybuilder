import { Graphics, Application } from 'pixi.js';

export class Block {
  width = 50;
  height = 50;
  color: number;
  app: Application;

  constructor(app: Application, color: number) {
    this.color = color;
    this.app = app;
  }

  draw(rowIndex: number, cellIndex: number) {
    const graphics = new Graphics();
    graphics.beginFill(this.color);

    graphics.drawRect(
      cellIndex * this.width,
      rowIndex * this.height,
      this.width,
      this.height
    );

    graphics.endFill();
    this.app.stage.addChild(graphics);
  }
}
