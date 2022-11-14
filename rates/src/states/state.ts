import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Rate, Transaction } from '../models';

const name = 'rates';
const namespace = (action: string): string => `${name}/${action}`;

const transactionConversionRates = {
  EUR: 8234.51,
  ETH: 3.2,
  LTC: 8.13,
  USD: 9230.23,
  RND: 433.76,
};

type ConverterState = {
  transactionTotal: number;
  rates: Rate[];
};

const initialState: ConverterState = {
  transactionTotal: 0,
  rates: [],
};

const addTransaction = createAction<Transaction>(namespace('addTransaction'));

const clearRates = createAction(namespace('clearRates'));

const rateSlice = createSlice({
  name,
  initialState,
  reducers: {
    addTransaction(state, { payload }) {
      const transaction = payload as Transaction | undefined;

      const transactionTotal =
        state.transactionTotal + Number(transaction?.value ?? 0);

      state.transactionTotal = transactionTotal;
      state.rates = Object.entries(transactionConversionRates).map(
        ([name, rate]) => ({ name, rate: transactionTotal * rate })
      );
    },
    clearRates(state) {
      state.transactionTotal = 0;
      state.rates = [];
    },
  },
});

const selectTransactionTotal = (data: RootState) => data.rates.transactionTotal;
const selectRates = (data: RootState) => data.rates.rates;

export {
  rateSlice,
  addTransaction,
  clearRates,
  selectTransactionTotal,
  selectRates,
};
