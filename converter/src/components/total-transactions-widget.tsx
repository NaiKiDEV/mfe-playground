import { useSelector } from 'react-redux';
import {
  selectTransactionTotal,
  selectTransactionTotalConverted,
} from '../states';

const TotalTransactions = () => {
  const transactionTotal = useSelector(selectTransactionTotal);
  const transactionTotalConverted = useSelector(
    selectTransactionTotalConverted
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px',
        width: 200,
        border: '1px solid black',
      }}
    >
      <div style={{ paddingBottom: 12, fontWeight: 'bold', fontSize: '26px' }}>
        Balance:
      </div>
      {transactionTotal === 0 ? (
        <div>No transactions available.</div>
      ) : (
        <div style={{ display: 'flex', gap: '6px', flexDirection: 'column' }}>
          <div style={{ color: 'grey', fontSize: '18px' }}>
            {transactionTotal.toFixed(6)} BTC
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
            ~{transactionTotalConverted.toFixed(2)} €
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalTransactions;
