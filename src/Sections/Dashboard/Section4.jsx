import React from "react";
// import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Customer Satisfaction",
    },
  },
  responsive: true,
  interaction: {
    // mode: 'index' as const,
    intersect: true,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Product 1",
      data: ["12", "2", "8", "6", "9", "3", "8"],
      backgroundColor: "rgb(255, 0, 96)",
      stack: "Stack 1",
    },
    {
      label: "Product 2",
      data: ["5", "8", "7", "2", "7", "10", "9"],
      backgroundColor: "rgb(0, 223, 162)",
      stack: "Stack 2",
    },
    {
      label: "Product 3",
      data: ["1", "2", "5", "4", "5", "6", "11"],
      backgroundColor: "#1f8ef1",
      stack: "Stack 3",
    },
  ],
};

const Section4 = () => {
  return (
    <div className="w-full rounded-md bg-[#fff] dark:bg-[#27293d] shadow-md dark:shadow-lg py-4 mb-5 px-5">
      <div className="flex flex-col  mb-2">
        <p className="text-xs font-light text-[#9a9a9a] pop">
          Customer Feedback
        </p>
        <p className="text-[30px] !font-[100] text-black dark:text-white pop">
          Product Reviews
        </p>
      </div>
      <div className="w-full h-fit">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Section4;
