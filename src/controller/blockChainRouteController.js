const { BlockChainService } = require("../service");
const { transactions } = require("../reposetory");

const blockChainService = new BlockChainService();

const retrieveTransactions = async (req, res) => {
  // const queue = new Queue("block transaction process queue");
  const latestBlockNumber = await blockChainService.getLatestBlockNumber();
  let i = 1;
  while (i <= 10000) {
    const blockNumber = latestBlockNumber - i;
    const allTransactions =
      await blockChainService.getAllTransactionsByBlockNumber(blockNumber);
    await transactions.SaveBlockTransactions(blockNumber, allTransactions);
    ++i;
  }
  res.send("done");
};

module.exports = { retrieveTransactions };
