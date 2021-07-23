import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepicker } from "../context/datepicker.context";

export const Days = ({ className = "" }) => {
  const { month, dayOffset, handleSelectedDate } = useDatepicker();

  const [cells, setCells] = useState<any>([]);

  useEffect(() => {
    const daysInMonth = moment(month).daysInMonth();
    console.log(
      moment(month).format("MMMM YYYY"),
      "has",
      daysInMonth,
      "with an offset of",
      dayOffset
    );
    let cells =
      daysInMonth === 28 && dayOffset === 7
        ? new Array(28).fill(null)
        : new Array(35).fill(null);

    cells = cells.map((_, idx) => {
      let offset = dayOffset % 7;
      if (idx < offset)
        return {
          value: null,
          display: "",
        };
      else if (idx - offset < daysInMonth)
        return {
          value: moment(month)
            .add(idx - offset, "days")
            .toDate(),
          display: idx + 1 - offset,
        };
      else
        return {
          value: null,
          display: "",
        };
    });

    setCells(cells);
  }, [dayOffset, month]);
  return (
    <div className="grid w-full grid-cols-7">
      {cells &&
        cells.map(({ value, display }, idx) => (
          <div
            key={idx}
            className={className}
            onClick={() => {
              console.log(value);
              handleSelectedDate(
                moment(month).startOf("month").add(idx, "days").toDate()
              );
            }}
          >
            {display}
          </div>
        ))}
    </div>
  );
};
