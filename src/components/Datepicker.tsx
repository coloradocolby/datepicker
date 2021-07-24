import React from "react";
import { useDatepicker } from "../context/datepicker.context";

export const Datepicker = ({ className = "", children }) => {
  const { show } = useDatepicker();

  return show ? <div className={className}>{children}</div> : null;
};
