import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Calendar = ({ children, className }) => {
  const { monthsDisplayed } = useDatepickerContext();

  return (
    <div className={className}>
      {monthsDisplayed.map((month) => (
        <>
          {children({
            month,
          })}
        </>
      ))}
    </div>
  );
};
