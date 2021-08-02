import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { UseDatepickerReturn } from "../types/UseDatepickerReturn";

export const useDatepicker = ({
  minDate,
  maxDate,
  calendarStart: calStart,
  monthsToDisplay = 1,
  range = false,
}: {
  minDate: Date;
  maxDate: Date;
  calendarStart: Date;
  monthsToDisplay?: number;
  range: boolean;
}) => {
  const [date, setDate] = useState<Date>();
  const [dateRange, setDateRange] = useState<{
    start: Date;
    end: Date;
  }>();
  const [calendarStart, setCalendarStart] = useState<Date>(
    moment(calStart).startOf("month").toDate()
  );
  const [hoverDate, setHoverDate] = useState<Date>(null);
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

  const handleSelectedDate = (date: Date) => {
    if (range) {
      if (dateRange?.start && moment(date).isSame(dateRange.start, "day")) {
        setDateRange((range) => ({
          end: null,
          start: null,
        }));
      } else if (
        !dateRange?.start ||
        moment(dateRange.start).isAfter(date, "day")
      ) {
        setDateRange((range) => ({
          end: null,
          start: date,
        }));
      } else if (moment(dateRange.start).isBefore(date, "day")) {
        setDateRange((range) => ({
          ...range,
          end: date,
        }));
      }
    } else {
      setDate(date);
    }
  };

  const handleShowDatepicker = (show: boolean) => setShow(show);

  const handleHoverDate = (date: Date) => setHoverDate(date);

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
    view,
    range,
    date,
    dateRange,
    hoverDate,
    handleHoverDate,
  } as UseDatepickerReturn;
};
