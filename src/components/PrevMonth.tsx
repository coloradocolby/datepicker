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
  const { calendarStart, handleCalendarUpdate } = useDatepickerContext();
  return (
    <button
      data-testid="prev-month"
      className={className}
      onClick={() => {
        handleCalendarUpdate(
          moment(calendarStart).subtract(1, "month").toDate()
        );
      }}
      onKeyPress={() => {
        handleCalendarUpdate(
          moment(calendarStart).subtract(1, "month").toDate()
        );
      }}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
