import moment from "moment";
import React, { useRef, useState } from "react";
import { Datepicker } from "./components/Datepicker";
import { DatepickerContainer } from "./components/DatepickerContainer";
import { DatepickerInput } from "./components/DatepickerInput";
import { Days } from "./components/Days";
import { DaysOfWeek } from "./components/DaysOfWeek";
import { MonthYearLabel } from "./components/MonthYearLabel";
import { NextMonth } from "./components/NextMonth";
import { PrevMonth } from "./components/PrevMonth";
import { ReturnToToday } from "./components/ReturnToToday";
import { DatepickerProvider } from "./context/datepicker.context";

export const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datepickerContainerRef = useRef(null);
  return (
    <DatepickerProvider>
      <div className="flex flex-col items-center justify-start w-screen h-screen select-none">
        <div className="w-full max-w-md" ref={datepickerContainerRef}>
          <div className="w-full">
            <label htmlFor="firstName" className="text-xs font-medium">
              Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full px-2 py-1 mb-2 bg-gray-100 rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-300"
            />
          </div>
          <div className="relative w-full">
            <div>
              <label htmlFor="birthday" className="text-xs font-medium">
                Birthday
              </label>
            </div>
            <DatepickerContainer
              onChange={setSelectedDate}
              constainerRef={datepickerContainerRef}
            >
              <DatepickerInput
                id="birthday"
                className="w-full px-2 py-1 mb-2 bg-gray-100 rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-300"
              />
              <Datepicker className="absolute left-0 flex flex-col items-center w-full p-3 bg-gray-200 border-2 border-gray-100 rounded-md shadow-sm top-16">
                <div className="flex justify-between w-full">
                  <PrevMonth className="text-xs m-0.5 bg-gray-100 hover:bg-gray-300 rounded px-4 mt-3">
                    ←
                  </PrevMonth>
                  <MonthYearLabel className="mb-4 font-medium cursor-pointer" />
                  <NextMonth className="text-xs m-0.5 bg-gray-100 hover:bg-gray-300 rounded px-4 mt-3">
                    →
                  </NextMonth>
                </div>

                <DaysOfWeek className="my-2 font-medium text-center" />
                <Days className="flex items-center justify-center p-1 m-0.5 rounded-md cursor-pointer hover:bg-gray-300" />
                <ReturnToToday className="self-end font-medium bg-gray-100 hover:bg-gray-300 rounded px-2 py-0.5 cursor-pointer" />
              </Datepicker>
            </DatepickerContainer>
          </div>
          <div className="w-full">
            <label htmlFor="bio" className="text-xs font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              rows={10}
              className="w-full px-2 py-1 mb-2 bg-gray-100 rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-300"
            />
          </div>
        </div>
        <p className="mt-16 text-lg font-medium">
          {moment(selectedDate).format("LLLL")}
        </p>
      </div>
    </DatepickerProvider>
  );
};
