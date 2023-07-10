import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { chartExample2, chartExample3, chartExample4 } from "@/Data/charts";

const Section2 = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-5 mb-5">
      {/* Box 1 */}
      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] shadow-md dark:shadow-lg py-4 md:h-[390px] mb-5 md:mb-0">
        <div className="px-6">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Total Shipments
          </p>
          <p className="text-[23px] !font-[100] text-black dark:text-white pop">
            763,215
          </p>
        </div>
        {/* Content */}
        <div className="w-full h-[300px]">
          <Line data={chartExample2.data} options={chartExample2.options} />
        </div>
      </div>

      {/* Box 2 */}
      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] shadow-md dark:shadow-lg py-4 md:h-[390px] mb-5 md:mb-0">
        <div className="px-6">
          <p className="text-xs font-light text-[#9a9a9a] pop">Daily Sales</p>
          <p className="text-[23px] !font-[100] text-black dark:text-white pop">
            3,500€
          </p>
        </div>

        {/* Content */}
        <div className="w-full h-[300px] -ml-2">
          <Bar data={chartExample3.data} options={chartExample3.options} />
        </div>
      </div>

      {/* Box 3 */}
      <div className="col-span-1 rounded-md bg-[#fff] dark:bg-[#27293d] shadow-md dark:shadow-lg py-4 md:h-[390px]">
        <div className="px-6">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Completed Tasks
          </p>
          <p className="text-[23px] !font-[100] text-black dark:text-white pop">
            12,100K
          </p>
        </div>

        {/* Content */}
        <div className="w-full h-[300px]">
          <Line data={chartExample4.data} options={chartExample4.options} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
