import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Calendar = ({ children, className }) => {
  const { monthsDisplayed } = useDatepickerContext();

  return (
    <div className={className}>
      {monthsDisplayed.map((month) => (
        <Fragment key={month.toString()}>
          {children({
            month,
          })}
        </Fragment>
      ))}
    </div>
  );
};
