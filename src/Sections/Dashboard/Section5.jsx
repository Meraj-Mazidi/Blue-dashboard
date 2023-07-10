import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  LineElement,
  RadialLinearScale,
} from "chart.js";
import { Bubble, Radar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  LineElement,
  Filler
);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 1 }, () => ({
        x: 16,
        y: 3,
        r: 30,
      })),
      backgroundColor: "rgb(255, 0, 96)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 1 }, () => ({
        x: 20,
        y: 10,
        r: 20,
      })),
      backgroundColor: "#1f8ef1",
    },
    {
      label: "Green dataset",
      data: Array.from({ length: 1 }, () => ({
        x: 14,
        y: 4,
        r: 20,
      })),
      backgroundColor: "rgb(0, 223, 162)",
    },
    {
      label: "Yellow dataset",
      data: Array.from({ length: 1 }, () => ({
        x: 18,
        y: 6,
        r: 20,
      })),
      backgroundColor: "#f9d949",
    },
    {
      label: "Brown dataset",
      data: Array.from({ length: 1 }, () => ({
        x: 12,
        y: 8,
        r: 20,
      })),
      backgroundColor: "#9e6f21",
    },
  ],
};

const data2 = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "Customer Reach",
      data: [8, 9, 6, 9, 8, 7],
      backgroundColor: "rgba(29,140,248,0.2)",
      borderColor: "#1f8ef1",
      borderWidth: 4,
    },
  ],
};

const Section5 = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 mb-5">
      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 md:mb-0 shadow-md dark:shadow-lg py-4 px-5">
        <div className="flex flex-col mb-2">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Marketing Strategy
          </p>
          <p className="text-[30px] !font-[100] text-black dark:text-white pop">
            Company Reach
          </p>
        </div>
        <div className="w-full h-fit">
          <Bubble data={data} options={options} />
        </div>
      </div>

      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 md:mb-0 shadow-md dark:shadow-lg py-4">
        <div className="flex flex-col px-5 mb-2">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Marketing Strategy
          </p>
          <p className="text-[30px] !font-[100] text-black dark:text-white pop">
            Advertisement Reach
          </p>
        </div>
        <div className="w-full h-fit">
          <Radar data={data2} />
        </div>
      </div>
    </div>
  );
};

export default Section5;
