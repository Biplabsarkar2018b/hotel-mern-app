import React, { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const [chartState, setchartState] = useState({
    options: {
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 0,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "right",
            },
          },
        },
      ],
      legend: {
        show: false,
      },
    },
    series: [40, 40, 20],
    labels: [""],
  });
  return (
    <div className="donut">
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="donut"
        width="300"
      />
    </div>
  );
};

export default DonutChart;
