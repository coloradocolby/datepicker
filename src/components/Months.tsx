import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";
import { VIEW_TYPES } from "../models/view_types";

export const Months = ({
  className = "",
  year,
  months = [
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
  ],
}) => {
  const { handleMonthUpdate, toggleView } = useDatepicker();
  return (
    <>
      {months.map((month, idx) => (
        <div
          key={month}
          className={className}
          onClick={() => {
            handleMonthUpdate(moment(`${idx + 1}-01-${year}`).toDate());
            toggleView();
          }}
        >
          {month}
        </div>
      ))}
    </>
  );
};
