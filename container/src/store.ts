import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import { converterSlice } from './converter';
const { exchangeSlice } = require('exchange/state');
// import { rateSlice } from './rates';

const store = configureStore({
  reducer: {
    exchange: exchangeSlice.reducer,
    // converter: converterSlice.reducer,
    // rates: rateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { store };
