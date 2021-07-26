import moment from "moment";
import React, { createContext, useContext, useEffect, useState } from "react";
import { VIEW_TYPES } from "../models/view_types";

type DatepickerContextProps = {
  handleMonthUpdate: (date: Date) => void;
  handleSelectedDate: (date: Date) => void;
  handleShowDatepicker: (show: boolean) => void;
  toggleView: () => void;
  min?: Date;
  max?: Date;
  month?: Date;
  show: boolean;
  selectedDate: Date;
  dayOffset: number;
  view: VIEW_TYPES;
};
export const DatepickerContext = createContext<DatepickerContextProps>({
  handleMonthUpdate: () => {},
  handleSelectedDate: () => {},
  handleShowDatepicker: () => {},
  toggleView: () => {},
  min: null,
  max: null,
  month: null,
  show: false,
  selectedDate: null,
  dayOffset: null,
  view: VIEW_TYPES.DAYS,
});

export const useDatepicker = () => useContext(DatepickerContext);

export const DatepickerProvider = ({
  children,
  min: _min,
  max: _max,
}: {
  children: any;
  min: Date;
  max: Date;
}) => {
  const [min] = useState<Date>(_min);
  const [max] = useState<Date>(_max);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [month, setMonth] = useState<Date>(moment().startOf("month").toDate());
  const [dayOffset, setDayOffset] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const [view, setView] = useState<VIEW_TYPES>(VIEW_TYPES.DAYS);

  useEffect(() => {
    setDayOffset(moment(month).startOf("month").isoWeekday());
  }, [month]);

  const handleMonthUpdate = (date: Date) =>
    setMonth(moment(date).startOf("month").toDate());

  const handleSelectedDate = (date: Date) => setSelectedDate(date);

  const handleShowDatepicker = (show: boolean) => setShow(show);

  const toggleView = () =>
    setView((view) =>
      view === VIEW_TYPES.YEARS_MONTHS
        ? VIEW_TYPES.DAYS
        : VIEW_TYPES.YEARS_MONTHS
    );

  return (
    <DatepickerContext.Provider
      value={{
        handleMonthUpdate,
        handleSelectedDate,
        handleShowDatepicker,
        toggleView,
        min,
        max,
        month,
        show,
        selectedDate,
        dayOffset,
        view,
      }}
    >
      {children}
    </DatepickerContext.Provider>
  );
};
