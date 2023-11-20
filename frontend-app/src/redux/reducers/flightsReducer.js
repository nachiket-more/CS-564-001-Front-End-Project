// reducers/flightsReducer.js
import { SET_FLIGHTS_DATA } from '../actions/types';

const initialState = {
  flightsData: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS_DATA:
      return {
        ...state,
        flightsData: action.payload,
      };
    default:
      return state;
  }
};

export default flightsReducer;
