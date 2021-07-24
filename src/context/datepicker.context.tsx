import moment from "moment";
import React, { createContext, useContext, useEffect, useState } from "react";

type DatepickerContextProps = {
  month?: Date;
  handleMonthUpdate: (date: Date) => void;
  handleSelectedDate: (date: Date) => void;
  handleShowDatepicker: (show: boolean) => void;
  show: boolean;
  selectedDate: Date;
  dayOffset: number;
};
export const DatepickerContext = createContext<DatepickerContextProps>({
  handleMonthUpdate: () => {},
  handleSelectedDate: () => {},
  handleShowDatepicker: () => {},
  month: null,
  show: false,
  selectedDate: null,
  dayOffset: null,
});

export const useDatepicker = () => useContext(DatepickerContext);

export const DatepickerProvider = ({ children }: { children: any }) => {
  const [month, setMonth] = useState<Date>(moment().startOf("month").toDate());
  const [dayOffset, setDayOffset] = useState<number>();
  const [selectedDate, setSelectedDate] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setDayOffset(moment(month).startOf("month").isoWeekday());
  }, [month]);

  const handleMonthUpdate = (date) => {
    setMonth(moment(date).startOf("month").toDate());
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const handleShowDatepicker = (show) => {
    setShow(show);
  };

  return (
    <DatepickerContext.Provider
      value={{
        handleMonthUpdate,
        handleSelectedDate,
        handleShowDatepicker,
        month,
        show,
        selectedDate,
        dayOffset,
      }}
    >
      {children}
    </DatepickerContext.Provider>
  );
};
