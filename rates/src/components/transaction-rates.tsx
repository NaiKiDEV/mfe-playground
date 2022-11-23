import { useSelector } from 'react-redux';
import { selectRates } from '../states';

const RateList = () => {
  const rates = useSelector(selectRates);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '12px',
        width: 200,
        border: '1px solid green',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>Balance in most popular rates:</div>
      {!!rates.length ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
        >
          {rates.map((rate) => (
            <div key={rate.name}>
              <div style={{ fontWeight: 'bold' }}>{rate.name}</div>
              <div>{rate.rate.toFixed(2)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>No rates were found.</div>
      )}
    </div>
  );
};

export default RateList;
