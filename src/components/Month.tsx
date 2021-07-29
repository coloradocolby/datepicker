import moment from "moment";
import React from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Month = ({
  children,
  value,
  className,
}: {
  children: any;
  value: number;
  className?: string;
}) => {
  const { handleMonthUpdate, toggleView } = useDatepickerContext();

  return (
    <div
      className={className}
      onClick={() => {
        handleMonthUpdate(moment(value, "MM-DD-YYYY").toDate());
        toggleView();
      }}
    >
      {children}
    </div>
  );
};
