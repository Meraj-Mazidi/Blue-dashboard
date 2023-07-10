import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import { chartExample1 } from "@/Data/charts";

const Section1 = () => {
  const [bigChartData, setbigChartData] = useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  return (
    <div className="w-full rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 shadow-md dark:shadow-lg py-4">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between md:items-center px-6">
        <div className="flex flex-col">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Total Shipments
          </p>
          <p className="text-[30px] !font-[100] text-black dark:text-white pop">
            Performance
          </p>
        </div>

        <div className="pr-3 flex flex-col md:flex-row my-4 md:my-0 gap-y-2 md:gap-y-0">
          <button
            className={`px-5 border border-[#1d8cf8] text-[#1d8cf8] py-1 rounded-md md:rounded-r-none md:rounded-l-md text-base ${
              bigChartData === "data1" && "activeBtn text-white font-[600]"
            }`}
            onClick={() => setBgChartData("data1")}
          >
            Accounts
          </button>
          <button
            className={`px-5 border border-[#1d8cf8] text-[#1d8cf8] py-1 rounded-md md:rounded-none ${
              bigChartData === "data2" && "activeBtn text-white font-[600]"
            }`}
            onClick={() => setBgChartData("data2")}
          >
            Purchases
          </button>
          <button
            className={`px-5 border border-[#1d8cf8] text-[#1d8cf8] py-1 rounded-md md:rounded-l-none md:rounded-r-md ${
              bigChartData === "data3" && "activeBtn text-white font-[600]"
            }`}
            onClick={() => setBgChartData("data3")}
          >
            Sessions
          </button>
        </div>
      </div>
      <div className="w-full h-[300px] px-0 mt-5 md:mt-0">
        <Line
          data={chartExample1[bigChartData]}
          options={chartExample1.options}
        />
      </div>
    </div>
  );
};

export default Section1;
