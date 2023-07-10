import React from "react";
import { KanbanList } from "@/Components";

const Section1 = () => {
  return (
    <div className="w-full h-full rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 shadow-md dark:shadow-lg p-4">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Work Mnagement and Scheduling
          </p>
          <p className="text-[30px] !font-thin text-black dark:text-white pop">
            Your Personal Kanban
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mt-5">
        <KanbanList />
      </div>
    </div>
  );
};

export default Section1;
