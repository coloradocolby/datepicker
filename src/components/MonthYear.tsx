import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";
import { VIEW_TYPES } from "../models/view_types";

export const MonthYear = ({ className = "" }) => {
  const { month, toggleView } = useDatepicker();
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
