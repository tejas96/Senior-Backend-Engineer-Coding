const { BlockChainService } = require("../service");

const blockChainService = new BlockChainService();

const retrieveTransactions = (req, res) => {
  const web3 = blockChainService.connectToEthNode();
  web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ", result);
  });

  res.send("done");
};

module.exports = { retrieveTransactions };
