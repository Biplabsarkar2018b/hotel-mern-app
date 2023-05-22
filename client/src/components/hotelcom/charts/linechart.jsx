import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
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
      chart: {
        id: "basic-bar",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            // Customize the y-axis label format or values here
            // Example: format values with a dollar sign ($)
            return `${value}k`;
          },
        },
      },
      xaxis: {
        categories: [
          "Jul 8",
          "Jul 10",
          "Jul 13",
          "Jul 15",
          "Jul 17",
          "Jul 19",
          "Jul 21",
          "Jul8",
        ],
      },
    },
    series: [
      {
        name: "Rooms Revenue",
        data: [7, 10, 19, 13, 25, 29, 28, 23],
      },
      {
        name: "Other Revenue",
        data: [21, 13, 21, 7, 26, 43, 9, 32],
      },
    ],
  });
  return (
    <div>
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="line"
        width="500"
      />
    </div>
  );
};

export default LineChart;
