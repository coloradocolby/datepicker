import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";

export const NextMonth = ({ className = "", children }) => {
  const { month, handleMonthUpdate } = useDatepicker();
  return (
    <button
      className={className}
      onClick={() => {
        handleMonthUpdate(moment(month).add(1, "month").toDate());
      }}
      onKeyPress={() => {
        handleMonthUpdate(moment(month).add(1, "month").toDate());
      }}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
