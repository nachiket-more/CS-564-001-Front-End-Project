// reducers/airlinesReducer.js
import { SET_AIRLINES_DATA } from '../actions/types';

const initialState = {
  airlinesData: [],
};

const airlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AIRLINES_DATA:
      return {
        ...state,
        airlinesData: action.payload,
      };
    default:
      return state;
  }
};

export default airlinesReducer;
