import { BlockChainService } from "../service";
import { transactions } from "../reposetory";

const blockChainService = new BlockChainService();

export const retrieveTransactions = async (req, res) => {
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
