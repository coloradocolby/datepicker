import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepicker } from "../hooks/useDatepicker";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const DatepickerInput = ({ className = "", id }) => {
  const {
    date,
    handleShowDatepicker,
    handleSelectedDate,
    show,
    handleCalendarUpdate,
  } = useDatepickerContext();
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    if (
      date &&
      (inputDate ||
        !moment(inputDate).isValid ||
        !moment(inputDate).isSame(date, "day"))
    ) {
      setInputDate(
        moment(date)
          // .utc()   cant decide if this works or not
          .format("MM/DD/YYYY")
      );
    }
  }, [date]);

  return (
    <input
      id={id}
      className={className}
      onFocus={() => handleShowDatepicker(true)}
      type="text"
      onClick={() => {
        if (!show) {
          if (moment(inputDate).isValid()) {
            setInputDate(moment(inputDate).format("MM/DD/YYYY"));
            handleSelectedDate(moment(inputDate).toDate());
            handleCalendarUpdate(moment(inputDate).toDate());
          }
          handleShowDatepicker(true);
        }
      }}
      onBlur={() => {
        if (moment(inputDate).isValid()) {
          setInputDate(moment(inputDate).format("MM/DD/YYYY"));
          handleSelectedDate(moment(inputDate).toDate());
          handleCalendarUpdate(moment(inputDate).toDate());
        }
      }}
      onChange={(e) => {
        handleShowDatepicker(false);
        setInputDate(e.target.value);
      }}
      value={inputDate}
    />
  );
};
