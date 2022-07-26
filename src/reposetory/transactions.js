const Admin = require("../config/firebase");

const SaveBlockTransactions = async (blockNumber, transactions = []) => {
  console.log(blockNumber);
  const worker = Admin.firestore().batch();
  const documentRef = Admin.firestore()
    .collection("Transactions")
    .doc(String(blockNumber));
  for (let i = 0; i < 500; i++) {
    const traDocRef = documentRef.collection("AllTransactions").doc();
    if (transactions[i]) {
      worker.set(traDocRef, { data: transactions[i] });
    }
  }
  await worker.commit();
};

module.exports = { SaveBlockTransactions };
