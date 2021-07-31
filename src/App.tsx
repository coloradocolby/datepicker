import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import moment from "moment";
import React, { useRef, useState } from "react";
import { Calendar } from "./components/Calendar";
import { Datepicker } from "./components/Datepicker";
import { DatepickerContainer } from "./components/DatepickerContainer";
import { DatepickerInput } from "./components/DatepickerInput";
import { Days } from "./components/Days";
import { DaysOfWeek } from "./components/DaysOfWeek";
import { Month } from "./components/Month";
import { Months } from "./components/Months";
import { MonthYear } from "./components/MonthYear";
import { NextMonth } from "./components/NextMonth";
import { PrevMonth } from "./components/PrevMonth";
import { Today } from "./components/Today";
import { Years } from "./components/Years";
import { useDatepicker } from "./hooks/useDatepicker";
import { DatepickerProvider } from "./hooks/useDatepickerContext";
import { classNames } from "./utils/helpers";

export const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datepickerContainerRef = useRef(null);
  const methods = useDatepicker({
    minDate: new Date("0001-01-23"),
    maxDate: new Date("3000-08-10"),
    calendarStart: moment(new Date()).startOf("month").toDate(),
    monthsToDisplay: 2,
  });

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen bg-gray-100 select-none">
      <div className="w-full max-w-3xl">
        <div className="w-full">
          <label htmlFor="firstName" className="text-xs font-semibold">
            Name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-full px-2 py-1 mb-2 border-2 border-gray-100 rounded-md outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-400"
          />
        </div>
        <div className="relative w-full" ref={datepickerContainerRef}>
          <div>
            <label htmlFor="birthday" className="text-xs font-semibold">
              Birthday
            </label>
          </div>

          <DatepickerProvider {...methods}>
            <DatepickerContainer
              onChange={setSelectedDate}
              constainerRef={datepickerContainerRef}
            >
              <DatepickerInput
                id="birthday"
                className="w-full px-2 py-1 mb-2 border-2 border-gray-100 rounded-md outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-400"
              />
              <Datepicker className="absolute left-0 flex flex-col items-center w-full bg-white border-2 border-gray-100 rounded-md top-18">
                {({ view }) => (
                  <>
                    {view === "DAYS" && (
                      <div className="relative w-full">
                        <Calendar className="grid w-full grid-cols-1 md:grid-cols-2">
                          {({ month }) => (
                            <div className="w-full">
                              <div className="flex items-center justify-between w-full px-3 pt-1">
                                <div className="flex">
                                  <MonthYear
                                    className="py-0.5 px-1 m-1 text-xl font-semibold rounded cursor-pointer hover:bg-gray-100"
                                    month={month}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col w-full px-3 pb-3">
                                <DaysOfWeek className="my-2 font-semibold text-center" />
                                <Days month={month}>
                                  {({
                                    activeInMonth,
                                    display,
                                    selectedDay,
                                    value,
                                  }) => (
                                    <div
                                      className={classNames(
                                        "flex items-center justify-center p-1 m-0.5 rounded-md",
                                        activeInMonth
                                          ? "cursor-pointer outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-400"
                                          : "opacity-10",
                                        selectedDay && "bg-gray-300",
                                        activeInMonth &&
                                          !selectedDay &&
                                          "hover:bg-gray-200 active:bg-gray-300"
                                      )}
                                      tabIndex={value ? 0 : -1}
                                    >
                                      {display}
                                    </div>
                                  )}
                                </Days>
                              </div>
                            </div>
                          )}
                        </Calendar>
                        <div className="absolute top-2 right-2">
                          <div>
                            <PrevMonth className="text-xs mr-1 bg-gray-100 hover:bg-gray-200 rounded px-1 py-0.5">
                              <ChevronLeftIcon className="w-4 h-4" />
                            </PrevMonth>
                            <NextMonth className="text-xs bg-gray-100 hover:bg-gray-200 rounded px-1 py-0.5">
                              <ChevronRightIcon className="w-4 h-4" />
                            </NextMonth>
                          </div>
                          {/* <Today className="self-end font-semibold bg-gray-100 hover:bg-gray-200 rounded px-2 py-0.5 cursor-pointer" /> */}
                        </div>
                      </div>
                    )}

                    {view === "YEARS_MONTHS" && (
                      <>
                        <div className="flex items-center justify-between w-full px-3">
                          <div className="flex">
                            {/* <MonthYear className="py-0.5 px-1 m-1 text-xl font-semibold rounded cursor-pointer hover:bg-gray-100" /> */}
                          </div>
                        </div>

                        <div className="w-full overflow-y-scroll text-lg max-h-64">
                          <Years className="p-1 bg-gray-200 border-t border-b border-gray-300 cursor-pointer">
                            {({ year }) => (
                              <Months year={year}>
                                {({ display, value, isActiveMonth }) => (
                                  <Month
                                    value={value}
                                    className={classNames(
                                      `flex items-center justify-center p-1 m-2 rounded-md outline-none cursor-pointer focus:ring focus:ring-opacity-75 hover:bg-gray-200 active:bg-gray-300 focus:ring-blue-400`,
                                      isActiveMonth && "bg-gray-400"
                                    )}
                                  >
                                    {display}
                                  </Month>
                                )}
                              </Months>
                            )}
                          </Years>
                        </div>
                      </>
                    )}
                  </>
                )}
              </Datepicker>
            </DatepickerContainer>
          </DatepickerProvider>
        </div>
        <div className="w-full">
          <label htmlFor="bio" className="text-xs font-semibold">
            Bio
          </label>
          <textarea
            id="bio"
            rows={10}
            className="w-full px-2 py-1 mb-2 border-2 border-gray-100 rounded-md outline-none focus:ring focus:ring-opacity-75 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  );
};
