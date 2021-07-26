import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";

export const PrevMonth = ({
  className = "",
  children,
}: {
  className?: string;
  children?: any;
}) => {
  const { month, handleMonthUpdate } = useDatepicker();
  return (
    <button
      data-testid="prev-month"
      className={className}
      onClick={() => {
        handleMonthUpdate(moment(month).subtract(1, "month").toDate());
      }}
      onKeyPress={() => {
        handleMonthUpdate(moment(month).subtract(1, "month").toDate());
      }}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
