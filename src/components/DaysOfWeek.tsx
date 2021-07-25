import React from "react";

export const DaysOfWeek = ({
  className = "",
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
}) => {
  return (
    <div className="grid w-full grid-cols-7">
      {days.map((day) => (
        <div key={day} className={className}>
          {day}
        </div>
      ))}
    </div>
  );
};
