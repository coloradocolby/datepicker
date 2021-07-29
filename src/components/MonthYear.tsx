import moment from "moment";
import React from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const MonthYear = ({ className = "" }) => {
  const { month, toggleView } = useDatepickerContext();
  return (
    <div
      data-testid="month-year"
      className={className}
      onClick={() => {
        toggleView();
      }}
      onKeyPress={() => {
        toggleView();
      }}
      tabIndex={0}
    >
      <span>{moment(month).format("MMMM YYYY")}</span>
    </div>
  );
};
