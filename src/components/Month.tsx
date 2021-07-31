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
  const { handleCalendarUpdate, toggleView } = useDatepickerContext();

  return (
    <div
      className={className}
      onClick={() => {
        handleCalendarUpdate(moment(value, "MM-DD-YYYY").toDate());
        toggleView();
      }}
    >
      {children}
    </div>
  );
};
