import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Portal } from './portal';
import { store } from './store';
import { EventBus } from 'event_bus/event-bus';
// import { configureConverter } from './converter/configure';
// import { configureRates } from './rates/configure';

const eventBus = new EventBus();

// Add Global event bus object, for other microfrontends to use.
window.eventBus = eventBus;

// Exchange fires transactionAdded event.
window.eventBus.subscribe({
  name: 'transactionAdded',
  action: (transaction) => {
    console.log('Transaction detected: ', transaction);
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Portal />
  </Provider>,
  document.getElementById('root')
);
