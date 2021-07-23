import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";

export const PrevMonth = ({ className = "", children }) => {
  const { month, handleMonthUpdate } = useDatepicker();
  return (
    <button
      className={className}
      onClick={() => {
        handleMonthUpdate(moment(month).subtract(1, "month").toDate());
      }}
    >
      {children}
    </button>
  );
};
