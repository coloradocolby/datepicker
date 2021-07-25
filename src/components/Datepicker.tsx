import React from "react";
import { useDatepicker } from "../context/datepicker.context";

export const Datepicker = ({ className = "", children }) => {
  const { show, view } = useDatepicker();

  return show ? (
    <div className={className}>
      {children({
        view,
      })}
    </div>
  ) : null;
};
