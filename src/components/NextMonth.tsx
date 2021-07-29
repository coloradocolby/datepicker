import moment from "moment";
import React from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const NextMonth = ({
  className = "",
  children,
}: {
  className?: string;
  children?: any;
}) => {
  const { month, handleMonthUpdate } = useDatepickerContext();
  return (
    <button
      data-testid="next-month"
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
