const Web3 = require("web3");

let connection = null;

class BlockChainService {
  constructor() {
    this.connectToEthNode();
  }
  connectToEthNode() {
    let web3Provider = new Web3.providers.HttpProvider(
      process.env.ETHEREUM_NODE_END_POINT
    );
    connection = new Web3(web3Provider);
    return connection;
  }

  async getAllTransactionsByBlockNumber(transactionNumber) {
    const web3 = this.connectToEthNode();
    const Block = await web3.eth.getBlock(transactionNumber, true);
    return Block.transactions;
  }

  async getLatestBlockNumber() {
    const web3 = this.connectToEthNode();
    const latestBlockNumber = await web3.eth.getBlockNumber();
    return latestBlockNumber;
  }
}

module.exports = BlockChainService;
