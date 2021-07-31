import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { UseDatepickerReturn } from "../types/UseDatepickerReturn";

export const useDatepicker = ({
  minDate,
  maxDate,
  calendarStart: calStart,
  monthsToDisplay = 1,
}: {
  minDate: Date;
  maxDate: Date;
  calendarStart: Date;
  monthsToDisplay?: number;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [calendarStart, setCalendarStart] = useState<Date>(
    moment(calStart).startOf("month").toDate()
  );

  const [dayOffset, setDayOffset] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const [view, setView] = useState<"DAYS" | "YEARS_MONTHS">("DAYS");

  const [monthsDisplayed, setMonthsDisplayed] = useState<Date[]>([]);

  useEffect(() => {
    let arr = [];
    let temp = calendarStart;

    for (let i = 0; i < monthsToDisplay; i++) {
      arr.push(moment(temp).toDate());
      temp = moment(temp).add(1, "month").toDate();
    }

    setMonthsDisplayed(arr);
  }, [calendarStart, monthsToDisplay]);

  const handleCalendarUpdate = (date: Date) => {
    setCalendarStart(moment(date).startOf("month").toDate());
  };

  const handleSelectedDate = (date: Date) => setSelectedDate(date);

  const handleShowDatepicker = (show: boolean) => setShow(show);

  const toggleView = () =>
    setView((view) => (view === "YEARS_MONTHS" ? "DAYS" : "YEARS_MONTHS"));

  return {
    handleCalendarUpdate,
    handleSelectedDate,
    handleShowDatepicker,
    toggleView,
    minDate,
    maxDate,
    calendarStart,
    monthsDisplayed,
    show,
    selectedDate,
    view,
  } as UseDatepickerReturn;
};
