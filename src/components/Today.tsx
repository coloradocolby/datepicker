import moment from "moment";
import React from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Today = ({
  className = "",
  children = "Today",
}: {
  className?: string;
  children?: any;
}) => {
  const { handleCalendarUpdate, handleSelectedDate } = useDatepickerContext();
  return (
    <p
      className={className}
      data-testid="today"
      tabIndex={0}
      onClick={() => {
        handleCalendarUpdate(moment().startOf("month").toDate());
        handleSelectedDate(moment().toDate());
      }}
      onKeyPress={() => {
        handleCalendarUpdate(moment().startOf("month").toDate());
        handleSelectedDate(moment().toDate());
      }}
    >
      {children}
    </p>
  );
};
