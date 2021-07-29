import moment from "moment";
import React, { Fragment } from "react";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const Months = ({
  children,
  year,
  months = [
    { display: "Jan", value: `01-01-${year}` },
    { display: "Feb", value: `02-01-${year}` },
    { display: "Mar", value: `03-01-${year}` },
    { display: "Apr", value: `04-01-${year}` },
    { display: "May", value: `05-01-${year}` },
    { display: "Jun", value: `06-01-${year}` },
    { display: "Jul", value: `07-01-${year}` },
    { display: "Aug", value: `08-01-${year}` },
    { display: "Sep", value: `09-01-${year}` },
    { display: "Oct", value: `10-01-${year}` },
    { display: "Nov", value: `11-01-${year}` },
    { display: "Dec", value: `12-01-${year}` },
  ],
}: {
  children?: any;
  year: number;
  months?: { display: string; value: string }[];
}) => {
  const { month: _month } = useDatepickerContext();
  return (
    <>
      {months.map((month) => (
        <Fragment key={month.value}>
          {children({
            ...month,
            isActiveMonth: moment(
              `${month.value}-01-${year}`,
              "MM-DD-YYYY"
            ).isSame(_month, "month"),
          })}
        </Fragment>
      ))}
    </>
  );
};
