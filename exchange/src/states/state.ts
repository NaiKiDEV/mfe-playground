import { createAction, createSlice } from '@reduxjs/toolkit';
import { Transaction } from '../models';

const name = 'exchange';
const namespace = (action: string): string => `${name}/${action}`;

type ExchangeState = {
  transactions: Transaction[];
};

const initialState: ExchangeState = {
  transactions: [],
};

const addExchangeTransaction = createAction<Transaction>(
  namespace('addExchangeTransaction')
);

const clearExchangeHistory = createAction(namespace('clearExchangeHistory'));

const exchangeSlice = createSlice({
  name,
  initialState,
  reducers: {
    addExchangeTransaction(state, { payload }) {
      state.transactions = [...state.transactions, payload];
    },
    clearExchangeHistory(state) {
      state.transactions = [];
    },
  },
});

const selectTransactions = (data: { exchange: ExchangeState }) =>
  data.exchange.transactions;

export {
  exchangeSlice,
  addExchangeTransaction,
  clearExchangeHistory,
  selectTransactions,
};
