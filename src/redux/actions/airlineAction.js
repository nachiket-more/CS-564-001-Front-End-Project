// actions/airlinesActions.js
import axios from 'axios';
import { SET_AIRLINES_DATA } from './types';

export const setAirlinesData = (data) => {
  return {
    type: SET_AIRLINES_DATA,
    payload: data,
  };
};

export const fetchAirlinesData = () => {
  return (dispatch) => {
    axios.get('http://localhost:5050/airlines/all')
      .then((response) => {
        dispatch(setAirlinesData(response.data));
      })
      .catch((error) => {
        console.error('Error fetching airlines data:', error);
      });
  };
};
