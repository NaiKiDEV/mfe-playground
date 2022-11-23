import { lazy, Suspense } from 'react';
const TotalTransactions = lazy(
  () => import('converter/total-transactions-widget')
);
const Transactions = lazy(() => import('exchange/transactions'));
const RateList = lazy(() => import('rates/transaction-rates'));

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
      <Suspense fallback={'Loading Transaction...'}>
        <Transactions />
      </Suspense>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Suspense fallback={'Loading Transaction Widget...'}>
          <TotalTransactions />
        </Suspense>
        <Suspense fallback={'Loading Rate List...'}>
          <RateList />
        </Suspense>
      </div>
    </div>
  );
};

export { Portal };
