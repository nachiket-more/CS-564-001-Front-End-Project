// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // For asynchronous actions
import rootReducer from './reducers'; // Create this file in the next step

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
