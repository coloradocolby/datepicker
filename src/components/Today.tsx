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
  const { handleMonthUpdate, handleSelectedDate } = useDatepickerContext();
  return (
    <p
      className={className}
      data-testid="today"
      tabIndex={0}
      onClick={() => {
        handleMonthUpdate(moment().startOf("month").toDate());
        handleSelectedDate(moment().toDate());
      }}
      onKeyPress={() => {
        handleMonthUpdate(moment().startOf("month").toDate());
        handleSelectedDate(moment().toDate());
      }}
    >
      {children}
    </p>
  );
};
