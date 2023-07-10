import React from "react";
import { ToDo } from "@/Components";

const Section1 = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-full rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 shadow-md dark:shadow-lg p-4">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex flex-col">
            <p className="text-xs font-light text-[#9a9a9a] pop">
              Personal Work Management
            </p>
            <p className="text-[30px] !font-thin text-black dark:text-white pop">
              Personal To do list
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <ToDo mode="personal" />
        </div>
      </div>

      <div className="w-full rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 shadow-md dark:shadow-lg p-4">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex flex-col">
            <p className="text-xs font-light text-[#9a9a9a] pop">
              Company Work Management
            </p>
            <p className="text-[30px] !font-[100] text-black dark:text-white pop">
              Company To do list
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <ToDo mode="company" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
