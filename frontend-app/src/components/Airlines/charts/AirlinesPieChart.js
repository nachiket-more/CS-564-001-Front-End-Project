import React from 'react';
import { Chart } from 'react-google-charts';

export const pieChartOptions = {
  width: '100%',
  height: '100%',
  chartArea: {
    width: '70%',
    height: '70%',
  },
  backgroundColor: 'transparent',
  fontName: 'Montserrat',
  slices: [
    { color: '#011638' },
    { color: '#9055A2' },
    { color: '#DF7163' },
    { color: '#6862C4' },
    { color: '#D499B9' },
    { color: '#E8C1C5' },
    { color: '#FEB05B' },
    { color: '#009B8F' },
    { color: '#007CD3' },
    { color: '#00C9B5' },
    { color: '#57423E' },
    { color: '#446911' },
    { color: '#C24F7A' },
    { color: '#798897' },
  ],
  pieSliceText: 'none',
  legend: {
    position: 'bottom',
  },
  pieHole: 0.6,
  pieSliceBorderColor: 'transparent',
};

const AirlinesPieChart = ({ data }) => {
  const pieChartData = [
    ['Airline', 'Count'],
    ...data.map(({ Name, count }) => [Name, count]),
  ];

  return (
    <Chart chartType='PieChart' data={pieChartData} options={pieChartOptions} />
  );
};

export default AirlinesPieChart;
