import React from 'react';
import { Chart } from 'react-google-charts';

// Define options for the chart
export const barChartOptions = {
  width: 'auto',
  height: '100%',
  chartArea: { width: '70%', height: '70%' },
  colors: ['#9055A2', '#2E294E'],
  fontName: 'Montserrat',
  legend: {
    position: 'none',
  },
  isStacked: true,
  hAxis: {
    title: 'Delay',
    minValue: 0,
  },
};

// Functional component for Airlines Bar Chart
const AirlinesBarChart = ({ data }) => {
  // Render the chart using Google Charts and provided data
  return (
    <Chart
      chartType='BarChart'
      data={[
        ['Airline', 'DEP delay', 'ARR delay'],
        ...data.map(({ AIRLINE, DEPARTURE_DELAY, ARRIVAL_DELAY }) => [
          AIRLINE,
          DEPARTURE_DELAY,
          ARRIVAL_DELAY,
        ]),
      ]}
      options={barChartOptions}
    />
  );
};

export default AirlinesBarChart;
