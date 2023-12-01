import React from 'react';
import { Chart } from 'react-google-charts';

// Options configuration for the line chart
export const lineChartOptions = {
  curveType: 'function',
  legend: { position: 'top' },
  colors: ['#011638', '#D499B9'],
  hAxis: {
    textPosition: 'none',
  },
  vAxis: {
    viewWindow: {
      max: 350, // Set your desired maximum value for the y-axis
    },
  },
};

// Functional component for displaying airlines history using a line chart
const AirlinesHistory = ({ data }) => {
  // Render the line chart using Google Charts and provided data
  const lineChartData = [
    ['Airline', 'Departure Delay', 'Arrival Delay'],
    ...data.map(({ AIRLINE, DEPARTURE_DELAY, ARRIVAL_DELAY }) => [
      AIRLINE,
      DEPARTURE_DELAY,
      ARRIVAL_DELAY,
    ]),
  ];

  return (
    <Chart
      chartType='LineChart'
      width='100%'
      height='400px'
      data={lineChartData}
      options={lineChartOptions}
    />
  );
};

export default AirlinesHistory;
