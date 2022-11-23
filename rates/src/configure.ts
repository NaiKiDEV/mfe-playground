import { Store } from '@reduxjs/toolkit';
import { EventBus } from 'event-bus/event-bus';
import { Transaction } from './models';
import { addTransaction, clearRates } from './states';

const configureRates = (eventBus: EventBus, store: Store) => {
  eventBus
    .subscribe({
      name: 'transactionAdded',
      action: (payload) => {
        store.dispatch(addTransaction(payload as Transaction));
      },
    })
    .subscribe({
      name: 'transactionsCleared',
      action: () => {
        store.dispatch(clearRates());
      },
    });
};

export { configureRates };
