import React from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea, Doughnut } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 25, 20, 14, 20, 14],
      backgroundColor: [
        "rgb(219, 0, 91)",
        "rgba(29,140,248)",
        "rgb(249, 217, 73)",
        "rgb(130, 205, 71)",
        "rgb(183, 153, 255)",
        "rgb(242, 151, 39)",
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ["USA", "GER", "AUS", "UK", "RO", "BR", "Po", "IRI", "India"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 1, 5, 8, 13, 15, 20, 8],
      backgroundColor: [
        "rgb(255, 109, 96)",
        "rgb(31, 142, 241, 1)",
        "rgb(162, 255, 134)",
        "rgb(158, 111, 33)",
        "rgb(246, 250, 112)",
        "rgb(184, 231, 225)",
        "rgb(22, 75, 96)",
        "rgb(162, 255, 134)",
        "rgb(27, 107, 147)",
      ],
      borderWidth: 0,
    },
  ],
};

const Section3 = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 mb-5">
      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 md:mb-0 shadow-md dark:shadow-lg py-4">
        <div className="flex flex-col px-5 mb-2">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Total Shipments
          </p>
          <p className="text-[30px] !font-[100] text-black dark:text-white pop">
            Monthly Sales
          </p>
        </div>
        <div className="w-full h-fit">
          <PolarArea data={data} />
        </div>
      </div>

      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] shadow-md dark:shadow-lg py-4">
        <div className="flex flex-col px-5 mb-2">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Total Shipments
          </p>
          <p className="text-[30px] !font-[100] text-black dark:text-white pop">
            Annual Sales
          </p>
        </div>
        <div className="w-full h-fit">
          <Doughnut data={data2} />
        </div>
      </div>
    </div>
  );
};

export default Section3;
