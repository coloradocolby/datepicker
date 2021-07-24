import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepicker } from "../context/datepicker.context";

export const DatepickerInput = ({ className = "", id }) => {
  const {
    selectedDate,
    handleShowDatepicker,
    handleSelectedDate,
    handleMonthUpdate,
  } = useDatepicker();
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    if (
      !inputDate ||
      !moment(inputDate).isValid ||
      !moment(inputDate).isSame(selectedDate, "day")
    ) {
      setInputDate(
        moment(selectedDate)
          // .utc()   cant decide if this works or not
          .format("yyyy-MM-DD")
      );
    }
  }, [selectedDate]);

  return (
    <input
      id={id}
      className={className}
      onFocus={() => handleShowDatepicker(true)}
      type="date"
      onChange={(e) => {
        setInputDate(e.target.value);
        if (moment(e.target.value).isValid()) {
          handleSelectedDate(moment(e.target.value).toDate());
          handleMonthUpdate(moment(e.target.value).toDate());
        }
      }}
      value={inputDate}
    />
  );
};
