import { BlockchainUtils } from './blockchain.util';

export interface DataModel {
  from: string;
  to: string;
  amount: number;
}

export class Block {
  data: DataModel | null;
  hash: string;
  previousHash?: string;
  timestamp: Date;
  pow: number;

  constructor(data: DataModel | null, previousHash?: string) {
    this.data = data;
    this.hash = '0';
    this.previousHash = previousHash;
    this.timestamp = new Date();
    this.pow = 0;
  }

  mine(difficulty: number) {
    const regex = new RegExp(`^(0){${difficulty}}.*`);
    while (!this.hash.match(regex)) {
      this.pow++;
      this.hash = BlockchainUtils.calculateHash(this);
    }
  }
}
