import React from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Datepicker = ({ className = "", children }) => {
  const { show, view } = useDatepickerContext();

  return show ? (
    <div className={className}>
      {children({
        view,
      })}
    </div>
  ) : null;
};
