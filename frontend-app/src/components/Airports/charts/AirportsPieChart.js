import React from "react";
import { Chart } from "react-google-charts";

// Sample data for the pie chart
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

// Options for the pie chart
export const pieChartOptions = {
  width: "auto",
  height: "100%",
  fontName: "Montserrat",
  legend: {
    position: "none",
  },
  // Custom colors for each slice of the pie chart
  slices: [
    { color: "#011638" },
    { color: "#9055A2" },
    { color: "#DF7163" },
    { color: "#6862C4" },
    { color: "#D499B9" },
    { color: "#E8C1C5" },
    { color: "#FEB05B" },
    { color: "#009B8F" },
    { color: "#007CD3" },
    { color: "#00C9B5" },
    { color: "#57423E" },
    { color: "#446911" },
    { color: "#C24F7A" },
    { color: "#798897" },
  ],
};

/**
 * Function for rendering a PieChart using react-google-charts.
 * @param {Array} trafficData - Data to be displayed in the pie chart.
 */
const AirportsBarChart = ({ trafficData }) => {
  return (
    <Chart
      chartType="PieChart"
      data={trafficData}
      options={pieChartOptions}
      width={"100%"}
      height={"100%"}
    />
  );
};

export default AirportsBarChart;
