// actions/flightsActions.js
import axios from 'axios';
import { SET_FLIGHTS_DATA } from './types';

export const setFlightsData = (data) => {
  return {
    type: SET_FLIGHTS_DATA,
    payload: data,
  };
};

export const fetchFlightsData = () => {
  return (dispatch) => {
    axios.get('http://localhost:5050/flights/all')
      .then((response) => {
        dispatch(setFlightsData(response.data));
      })
      .catch((error) => {
        console.error('Error fetching flights data:', error);
      });
  };
};
