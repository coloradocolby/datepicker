import { ChevronRightIcon } from "@heroicons/react/solid";
import moment from "moment";
import React from "react";
import { useDatepicker } from "../context/datepicker.context";
import { VIEW_TYPES } from "../models/view_types";
import { classNames } from "../utils/helpers";

export const MonthYear = ({ className = "" }) => {
  const { month, view, handleViewUpdate } = useDatepicker();
  return (
    <div
      className={className}
      onClick={() => {
        handleViewUpdate(
          view === VIEW_TYPES.DAYS ? VIEW_TYPES.YEARS_MONTHS : VIEW_TYPES.DAYS
        );
      }}
      tabIndex={0}
    >
      <span>{moment(month).format("MMMM YYYY")}</span>
    </div>
  );
};
