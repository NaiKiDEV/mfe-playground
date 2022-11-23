import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { converterSlice } from 'converter/state';
import { exchangeSlice } from 'exchange/state';
import { rateSlice } from 'rates/state';

const store = configureStore({
  reducer: {
    exchange: exchangeSlice.reducer,
    converter: converterSlice.reducer,
    rates: rateSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { store };
