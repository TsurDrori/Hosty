import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { staysReducer } from './stay.reducer.js';
import { userReducer } from './user.reducer.js';
import { ordersReducer } from './order.reducer.js';
import { modalReducer } from './modal.reducer.js';

const rootReducer = combineReducers({
  staysModule: staysReducer,
  ordersModule: ordersReducer,
  userModule: userReducer,
  modalModule: modalReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
