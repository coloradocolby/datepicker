import moment from "moment";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Years = ({ className = "", children }) => {
  const { calendarStart } = useDatepickerContext();
  const [years, setYears] = useState([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openYear, setOpenYear] = useState(
    Number(moment(calendarStart).format("YYYY"))
  );

  useLayoutEffect(() => {
    const elem = document.getElementById(
      `year-${moment(calendarStart).format("YYYY")}`
    );
    if (elem && !hasScrolled) {
      elem?.scrollIntoView?.();
      setHasScrolled(true);
    }
  });

  useEffect(() => {
    let y = [];
    for (var i = 1990; i < 2030; i++) {
      y.push(i);
    }
    setYears(y);
  }, []);
  return (
    <>
      {years.map((year) => {
        return (
          <Fragment key={year}>
            <div
              id={`year-${year}`}
              className={className}
              onClick={() => setOpenYear(year)}
            >
              {year}
            </div>
            {openYear === year && (
              <div className="grid w-full grid-cols-4">
                {children({
                  year,
                })}
              </div>
            )}
          </Fragment>
        );
      })}
    </>
  );
};
