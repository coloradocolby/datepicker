import moment from "moment";
import React from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const PrevMonth = ({
  className = "",
  children,
}: {
  className?: string;
  children?: any;
}) => {
  const { month, handleMonthUpdate } = useDatepickerContext();
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
