import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  curveType: "function",
  legend: { position: "top" },
  colors: ["#011638", "#D499B9"],
  hAxis: {
    textPosition: "none",
  },
};

const AirlinesHistory = ({ data }) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={[
        ["Airline", "Departure Delay", "Arrival Delay"],
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

export default AirlinesHistory;
