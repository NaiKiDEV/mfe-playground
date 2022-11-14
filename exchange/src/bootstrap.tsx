import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TransactionPage from './pages/transactions';
import { exchangeSlice } from './states';

const store = configureStore({
  reducer: {
    exchange: exchangeSlice.reducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <TransactionPage />
  </Provider>,
  document.getElementById('root')
);
