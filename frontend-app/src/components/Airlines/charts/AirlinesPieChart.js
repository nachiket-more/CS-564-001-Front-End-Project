import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  width: "100%",
  height: "100%",
  chartArea: { width: "70%", height: "70%" },
  backgroundColor: "transparent",
  fontName: "Montserrat",
  slices: [
    { color: "#011638" },
    { color: "#9055A2" },
    { color: "#2E294E" },
    { color: "#D499B9" },
    { color: "#E8C1C5" },
    { color: "#011638" },
    { color: "#9055A2" },
    { color: "#2E294E" },
    { color: "#D499B9" },
    { color: "#E8C1C5" },
    { color: "#011638" },
    { color: "#9055A2" },
    { color: "#2E294E" },
    { color: "#D499B9" },
    { color: "#E8C1C5" },
  ],
  pieSliceText: "none",
  legend: {
    position: "right",
  },
  pieHole: 0.6,
  pieSliceBorderColor: "transparent",
};

const AirlinesPieChart = ({ data }) => {
  return (
    <Chart
      chartType="PieChart"
      data={[
        ["Airline", "Count"],
        ...data.map(({ Name, count }) => [Name, count]),
      ]}
      options={options}
    />
  );
};

export default AirlinesPieChart;
