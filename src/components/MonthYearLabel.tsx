import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";

export const MonthYearLabel = ({ className = "" }) => {
  const { month } = useDatepicker();
  return <p className={className}>{moment(month).format("MMMM YYYY")}</p>;
};
