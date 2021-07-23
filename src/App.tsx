import moment from "moment";
import React, { useState } from "react";
import { Datepicker } from "./components/Datepicker";
import { Days } from "./components/Days";
import { DaysOfWeek } from "./components/DaysOfWeek";
import { MonthYearLabel } from "./components/MonthYearLabel";
import { NextMonth } from "./components/NextMonth";
import { PrevMonth } from "./components/PrevMonth";
import { DatepickerProvider } from "./context/datepicker.context";

export const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen select-none">
      <div className="w-full max-w-sm">
        <DatepickerProvider>
          <Datepicker
            className="flex flex-col items-center w-full p-3 text-sm bg-gray-200 rounded-md shadow-md"
            onChange={setSelectedDate}
          >
            <div className="flex justify-between w-full">
              <PrevMonth className="text-xs m-0.5 bg-gray-300 rounded px-2 py-0.5 mt-3">
                ←
              </PrevMonth>
              <MonthYearLabel className="font-medium" />
              <NextMonth className="text-xs m-0.5 bg-gray-300 rounded px-2 py-0.5 mt-3">
                →
              </NextMonth>
            </div>

            <DaysOfWeek className="my-2 font-medium text-center" />
            <Days className="flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-gray-300" />
          </Datepicker>
        </DatepickerProvider>
        <div className="flex justify-center my-2 text-lg font-medium">
          {selectedDate && moment(selectedDate).format("MMMM Do, YYYY")}
        </div>
      </div>
    </div>
  );
};
