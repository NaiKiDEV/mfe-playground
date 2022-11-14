import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Transaction } from '../models';

const name = 'converter';
const namespace = (action: string): string => `${name}/${action}`;

const transactionConversionRate = 8234.51;

type ConverterState = {
  transactionTotal: number;
  transactionTotalConverted: number;
};

const initialState: ConverterState = {
  transactionTotal: 0,
  transactionTotalConverted: 0,
};

const addTransactionToConverter = createAction<Transaction>(
  namespace('addTransactionToConverter')
);

const clearConverterHistory = createAction(namespace('clearConverterHistory'));

const converterSlice = createSlice({
  name,
  initialState,
  reducers: {
    addTransactionToConverter(state, { payload }) {
      const transaction = payload as Transaction | undefined;

      const transactionTotal =
        state.transactionTotal + Number(transaction?.value ?? 0);
      const transactionTotalConverted =
        state.transactionTotalConverted +
        Number((transaction?.value ?? 0) * transactionConversionRate);

      state.transactionTotal = transactionTotal;
      state.transactionTotalConverted = transactionTotalConverted;
    },
    clearConverterHistory(state) {
      state.transactionTotal = 0;
      state.transactionTotalConverted = 0;
    },
  },
});

const selectTransactionTotal = (data: RootState) =>
  data.converter.transactionTotal;
const selectTransactionTotalConverted = (data: RootState) =>
  data.converter.transactionTotalConverted;

export {
  converterSlice,
  addTransactionToConverter,
  clearConverterHistory,
  selectTransactionTotal,
  selectTransactionTotalConverted,
};
