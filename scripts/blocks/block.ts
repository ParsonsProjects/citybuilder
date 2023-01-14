export class Block {
  width = 50;
  height = 50;
  color = '';
  x = 0;
  y = 0;

  constructor(color: string) {
    this.color = color;
  }

  place(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
