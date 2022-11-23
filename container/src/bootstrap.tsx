import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Portal } from './portal';
import { store } from './store';
import { EventBus } from 'event-bus/event-bus';
import { configureRates } from 'rates/configure';
import { configureConverter } from 'converter/configure';

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

configureRates(window.eventBus, store);
configureConverter(window.eventBus, store);

ReactDOM.render(
  <Provider store={store}>
    <Portal />
  </Provider>,
  document.getElementById('root')
);
