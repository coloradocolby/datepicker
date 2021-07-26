import moment from "moment";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useDatepicker } from "../context/datepicker.context";

export const Years = ({ className = "", children }) => {
  const { month } = useDatepicker();
  const [years, setYears] = useState([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openYear, setOpenYear] = useState(
    Number(moment(month).format("YYYY"))
  );

  useLayoutEffect(() => {
    const elem = document.getElementById(
      `year-${moment(month).format("YYYY")}`
    );
    if (elem && !hasScrolled) {
      elem.scrollIntoView();
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
