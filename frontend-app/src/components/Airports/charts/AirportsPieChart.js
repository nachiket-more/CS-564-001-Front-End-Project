import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  width: "auto",
  height: "100%",
  fontName: "Montserrat",
  legend: {
    position: "none",
  },
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

const AirportsBarChart = ({trafficData}) => {
  return (
    <Chart
      chartType="PieChart"
      data={trafficData}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
}


export default AirportsBarChart;