import { useSelector, useDispatch } from 'react-redux';
import TransactionHistory from '../components/transaction-history';
import { Transaction } from '../models';
import {
  addExchangeTransaction,
  clearExchangeHistory,
  selectTransactions,
} from '../states';

const generateRandomTransaction = (): Transaction => {
  const randomValue = +(Math.random() * 3).toFixed(6);
  return {
    name: 'BTC',
    value: randomValue,
    date: new Date().toISOString(),
  };
};

const TransactionPage = () => {
  const dispatch = useDispatch();
  const transactionHistory = useSelector(selectTransactions);

  const handleAddTransaction = () => {
    const transaction = generateRandomTransaction();

    dispatch(addExchangeTransaction(transaction));
    window.eventBus?.publish?.('transactionAdded', transaction);
  };

  const handleClearTransaction = () => {
    dispatch(clearExchangeHistory());
    window.eventBus?.publish?.('transactionsCleared');
  };

  return (
    <div style={{ display: 'flex', gap: 6, flexDirection: 'column' }}>
      <button onClick={handleAddTransaction}>Add transaction</button>
      <button onClick={handleClearTransaction}>Clear transactions</button>
      <TransactionHistory data={transactionHistory} />
    </div>
  );
};

export default TransactionPage;
