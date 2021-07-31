import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Days = ({ children, month }) => {
  const { handleSelectedDate, selectedDate, minDate, maxDate } =
    useDatepickerContext();

  const [cells, setCells] = useState<any>([]);

  useEffect(() => {
    const dayOffset = moment(month).startOf("month").isoWeekday();
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
        const date = moment(month)
          .add(idx - offset, "days")
          .toDate();
        return {
          value:
            moment(date).isAfter(minDate) && moment(date).isBefore(maxDate)
              ? date
              : null,
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
  }, [month]);

  return (
    <div className="grid w-full grid-cols-7">
      {cells &&
        cells.map(({ value, display }, idx) => (
          <div
            key={`${moment(month).format("YYYY-MM")}-${idx + 1}`}
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
          >
            {children({
              activeInMonth: !!value,
              display,
              selectedDay: moment(value).isSame(moment(selectedDate), "day"),
              value,
            })}
          </div>
        ))}
    </div>
  );
};
