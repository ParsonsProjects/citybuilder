import { EBlocks } from '../enums/blocks';

export interface INeighbour {
  power: { enabled: boolean; output: number; usage: number };
  police: { coverage: number };
  type: EBlocks;
}

export type INeighbours = Array<INeighbour>;
