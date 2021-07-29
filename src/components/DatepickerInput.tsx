import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDatepicker } from "../hooks/useDatepicker";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const DatepickerInput = ({ className = "", id }) => {
  const {
    selectedDate,
    handleShowDatepicker,
    handleSelectedDate,
    show,
    handleMonthUpdate,
  } = useDatepickerContext();
  const [inputDate, setInputDate] = useState("");

  useEffect(() => {
    if (
      selectedDate &&
      (inputDate ||
        !moment(inputDate).isValid ||
        !moment(inputDate).isSame(selectedDate, "day"))
    ) {
      setInputDate(
        moment(selectedDate)
          // .utc()   cant decide if this works or not
          .format("MM/DD/YYYY")
      );
    }
  }, [selectedDate]);

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
            handleMonthUpdate(moment(inputDate).toDate());
          }
          handleShowDatepicker(true);
        }
      }}
      onBlur={() => {
        if (moment(inputDate).isValid()) {
          setInputDate(moment(inputDate).format("MM/DD/YYYY"));
          handleSelectedDate(moment(inputDate).toDate());
          handleMonthUpdate(moment(inputDate).toDate());
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
