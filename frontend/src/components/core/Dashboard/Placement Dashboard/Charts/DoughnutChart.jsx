import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { bgBlue, bgBlueLight, pink, pinkLight } from "../../../../../utils/constants";

ChartJS.register(Tooltip, CategoryScale, ArcElement, Legend);

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};


const DoughnutChart = ({ value = [], labels = [] }) => {
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       data: value,
  //       backgroundColor: [pinkLight, bgBlueLight],
  //       hoverBackgroundColor: [pink, bgBlue],
  //       borderColor: [pink, bgBlue],
  //       offset: 40,
  //     },
  //   ],
  // };
  let data= [
    {
      label: "Label 1",
      value: 55,
      color: "rgba(0, 43, 73, 1)",
      cutout: "50%",
    },
    {
      label: "Label 2",
      value:15,
      color: "rgba(0, 103, 160, 1)",
      cutout: "50%",
    },
    {
      label: "Label 3",
      value: 80,
      color: "rgba(83, 217, 217, 1)",
      cutout: "50%",
    },
  ]

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <div className="p-4  rounded-lg  w-full max-w-sm flex flex-col items-center">
      <h2 className="text-lg font-semibold text-gray-600 mb-4">Statistics</h2>
      <Doughnut data={finalData} options={doughnutChartOptions} />
    </div>
  );
};

export default DoughnutChart;
