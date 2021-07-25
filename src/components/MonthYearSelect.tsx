import { ChevronRightIcon } from "@heroicons/react/solid";
import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";
import { VIEW_TYPES } from "../models/view_types";
import { classNames } from "../utils/helpers";

export const MonthYearSelect = ({ className = "" }) => {
  const { month, view, handleViewUpdate } = useDatepicker();
  return (
    <>
      <div className="w-full">
        <select name="month" id="month" className="text-2xl">
          {[
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
          ].map((month) => (
            <option key={month} value={month} className="text-base">
              {month}
            </option>
          ))}
        </select>

        <select name="year" id="year" className="text-2xl">
          {[
            1994, 1995, 1996, 1997, 1998, 1999, 2000, 1994, 1995, 1996, 1997,
            1998, 1999, 2000, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1994,
            1995, 1996, 1997, 1998, 1999, 2000, 1994, 1995, 1996, 1997, 1998,
            1999, 2000, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 1994, 1995,
            1996, 1997, 1998, 1999, 2000, 1994, 1995, 1996, 1997, 1998, 1999,
            2000, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
          ].map((year) => (
            <option key={year} value={year} className="text-base">
              {year}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
