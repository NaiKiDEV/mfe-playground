import { Transaction } from '../models';

type TransactionHistoryProps = {
  data: Transaction[];
};

const TransactionHistory = ({ data }: TransactionHistoryProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '12px',
        width: 360,
        border: '1px solid red',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 3fr',
          gap: '24px',
          fontWeight: 'bold',
        }}
      >
        <div>Name</div>
        <div>Amount</div>
        <div>Date</div>
      </div>
      {!data || data.length === 0 ? (
        <div>Data is empty.</div>
      ) : (
        data.map((x) => (
          <div
            key={x.date}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 3fr',
              gap: '24px',
            }}
          >
            <div>{x.name}</div>
            <div>{x.value}</div>
            <div>{x.date}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionHistory;
