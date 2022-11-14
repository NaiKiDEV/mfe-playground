import { Store } from '@reduxjs/toolkit';
import { EventBus } from '../event-bus';
import { Transaction } from './models';
import { addTransactionToConverter, clearConverterHistory } from './states';

const configureConverter = (eventBus: EventBus, store: Store) => {
  eventBus
    .subscribe({
      name: 'transactionAdded',
      action: (payload) => {
        store.dispatch(addTransactionToConverter(payload as Transaction));
      },
    })
    .subscribe({
      name: 'transactionsCleared',
      action: () => {
        store.dispatch(clearConverterHistory());
      },
    });
};

export { configureConverter };
