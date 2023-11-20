import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  width: "auto",
  height: "100%",
  chartArea: { width: "70%", height: "70%" },
  colors: ["#9055A2", "#2E294E"],
  fontName: "Montserrat",
  legend: {
    position: "none",
  },
  isStacked: true,
  hAxis: {
    title: "Delay",
    minValue: 0,
  },
};

const AirlinesBarChart = ({ data }) => {
  return (
    <Chart
      chartType="BarChart"
      data={[
        ["Airline", "DEP delay", "ARR delay"],
        ...data.map(({ AIRLINE, DEPARTURE_DELAY, ARRIVAL_DELAY }) => [
          AIRLINE,
          DEPARTURE_DELAY,
          ARRIVAL_DELAY,
        ]),
      ]}
      options={options}
    />
  );
};

export default AirlinesBarChart;
