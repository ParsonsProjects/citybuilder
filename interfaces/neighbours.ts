import { EBlocks } from '../enums/blocks';

export interface INeighbour {
  power: { enabled: boolean };
  police: { coverage: number };
  adjacent: INeighbour[];
  type: EBlocks;
}

export type INeighbours = Array<INeighbour>;
