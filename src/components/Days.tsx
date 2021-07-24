import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepicker } from "../context/datepicker.context";

export const Days = ({ className = "" }) => {
  const { month, dayOffset, handleSelectedDate, selectedDate } =
    useDatepicker();

  const [cells, setCells] = useState<any>([]);

  useEffect(() => {
    const daysInMonth = moment(month).utc().daysInMonth();
    const daysInLastMonth = moment(month).subtract(1, "month").daysInMonth();
    let cells =
      daysInMonth === 28 && dayOffset === 7
        ? new Array(28).fill(null)
        : new Array(35).fill(null);

    cells = cells.map((_, idx) => {
      let offset = dayOffset % 7;
      if (idx < offset) {
        return {
          value: null,
          display: daysInLastMonth - offset + idx + 1,
        };
      } else if (idx - offset < daysInMonth) {
        return {
          value: moment(month)
            .add(idx - offset, "days")
            .toDate(),
          display: idx + 1 - offset,
        };
      } else {
        return {
          value: null,
          display: idx % (daysInMonth + offset - 1),
        };
      }
    });

    setCells(cells);
  }, [dayOffset, month]);

  return (
    <div className="grid w-full grid-cols-7">
      {cells &&
        cells.map(({ value, display }, idx) => (
          <div
            key={idx}
            className={`${className} ${!value && "opacity-10"} ${
              moment(value).isSame(moment(selectedDate), "day") &&
              "bg-gray-400 hover:bg-gray-400"
            }`}
            onClick={() => {
              if (value) {
                handleSelectedDate(value);
              }
            }}
            onKeyPress={() => {
              if (value) {
                handleSelectedDate(value);
              }
            }}
            tabIndex={value ? 0 : -1}
          >
            {display}
          </div>
        ))}
    </div>
  );
};
