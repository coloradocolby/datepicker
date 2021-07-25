import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepicker } from "../context/datepicker.context";
import { VIEW_TYPES } from "../models/view_types";
import { classNames } from "../utils/helpers";

export const YearMonthSelect = ({ className = "" }) => {
  const { month, handleMonthUpdate, handleViewUpdate } = useDatepicker();
  const [years, setYears] = useState([]);
  const [months] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  useEffect(() => {
    const elem = document.getElementById(
      `year-${moment(month).format("YYYY")}`
    );
    if (elem) {
      elem.scrollIntoView();
    }
  });
  useEffect(() => {
    let y = [];
    for (var i = 1990; i < 2030; i++) {
      y.push(i);
    }
    setYears(y);
  }, []);
  return (
    <>
      {years.map((year) => {
        return (
          <div id={`year-${year}`} className="w-full text-lg">
            <div className="p-1 bg-gray-200">{year}</div>

            <div className="grid w-full grid-cols-4">
              {months.map((month, idx) => (
                <div
                  key={month}
                  className={classNames(
                    "cursor-pointer outline-none focus:ring focus:ring-opacity-75 flex items-center justify-center p-1 rounded-md m-2 hover:bg-gray-200 active:bg-gray-300 focus:ring-blue-400"
                  )}
                  onClick={() => {
                    handleMonthUpdate(moment(`${idx + 1}-01-${year}`).toDate());
                    handleViewUpdate(VIEW_TYPES.DAYS);
                  }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
