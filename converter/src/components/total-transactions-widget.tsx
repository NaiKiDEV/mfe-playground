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
        alignItems: 'center',
        textAlign: 'center',
        padding: '12px',
        width: 200,
        border: '1px solid black',
      }}
    >
      <div style={{ paddingBottom: 12, fontWeight: 'bold' }}>
        Summary in your currency:
      </div>
      {transactionTotal === 0 ? (
        <div>No transactions available.</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div>{transactionTotal.toFixed(2)} BTC</div>
          <div>{transactionTotalConverted.toFixed(2)} Euros</div>
        </div>
      )}
    </div>
  );
};

export { TotalTransactions };
