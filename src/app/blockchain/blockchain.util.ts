import { Block } from './block';

const shajs = require('sha.js');

export class BlockchainUtils {
  public static calculateHash(block: Block): string {
    const data = JSON.stringify(block.data);
    const blockData =
      data +
      block.previousHash +
      block.timestamp.toISOString() +
      block.pow.toString();
    return shajs('sha256').update(blockData).digest('hex');
  }
}
