import { lazy, Suspense } from 'react';
// import { TotalTransactions } from './converter';
const Transactions = lazy(() => import('exchange/transactions'));
const RateList = lazy(() => import('rates/transaction-rates'));
// import { RateList } from './rates';

const Portal = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
      }}
    >
      <Suspense fallback={'loading...'}>
        <Transactions />
      </Suspense>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {/* <TotalTransactions /> */}
        <Suspense fallback={'loading...'}>
          <RateList />
        </Suspense>
      </div>
    </div>
  );
};

export { Portal };
