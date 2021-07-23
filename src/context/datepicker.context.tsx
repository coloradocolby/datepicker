import moment from "moment";
import React, { createContext, useContext, useEffect, useState } from "react";

type DatepickerContextProps = {
  month?: Date;
  handleMonthUpdate: (date: Date) => void;
  handleSelectedDate: (date: Date) => void;
  selectedDate: Date;
  dayOffset: number;
};
export const DatepickerContext = createContext<DatepickerContextProps>({
  month: null,
  handleMonthUpdate: () => {},
  handleSelectedDate: () => {},
  selectedDate: null,
  dayOffset: null,
});

export const useDatepicker = () => useContext(DatepickerContext);

export const DatepickerProvider = ({ children }: { children: any }) => {
  const [month, setMonth] = useState<Date>(moment().startOf("month").toDate());
  const [dayOffset, setDayOffset] = useState<number>();
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    setDayOffset(moment(month).startOf("month").isoWeekday());
  }, [month]);

  const handleMonthUpdate = (date) => {
    setMonth(date);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatepickerContext.Provider
      value={{
        month,
        dayOffset,
        handleMonthUpdate,
        handleSelectedDate,
        selectedDate,
      }}
    >
      {children}
    </DatepickerContext.Provider>
  );
};
