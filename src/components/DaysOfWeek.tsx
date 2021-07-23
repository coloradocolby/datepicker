import React from "react";

export const DaysOfWeek = ({ className = "" }) => {
  return (
    <div className="grid w-full grid-cols-7">
      <div className={className}>Sun</div>
      <div className={className}>Mon</div>
      <div className={className}>Tue</div>
      <div className={className}>Wed</div>
      <div className={className}>Thu</div>
      <div className={className}>Fri</div>
      <div className={className}>Sat</div>
    </div>
  );
};
