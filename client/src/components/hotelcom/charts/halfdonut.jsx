import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const HalfDonut = () => {
  const [chartState, setchartState] = useState({
    series: [86,14],
    options: {
        colors: ['#0000FF', '#FFFFFF'],
        legend: {
            show: false,
          },
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10,
        },
      },
      grid: {
        padding: {
          bottom: -100,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="donut"
      />
    </div>
  );
};

export default HalfDonut;
