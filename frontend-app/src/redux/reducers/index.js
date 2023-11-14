// reducers/index.js
import { combineReducers } from 'redux';
import airlinesReducer from './airlinesReducer';
import flightsReducer from './flightsReducer'; 

const rootReducer = combineReducers({
  airlines: airlinesReducer,
  flights: flightsReducer,
});

export default rootReducer;
