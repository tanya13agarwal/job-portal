import React from "react";
import { Line } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
// import { pink, pinkLight } from "../../../../../utils/constants";
// import { getLast7Days } from "../../../../../utils/features";

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = ["2021"];

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = []  , heading}) => {
  const data = {
    labels: ["2021", "2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full ">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">{heading}</h2>
      <Line data={data} options={lineChartOptions} />
    </div>
  );
};

export default LineChart;
