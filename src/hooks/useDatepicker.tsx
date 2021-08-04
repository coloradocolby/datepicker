import moment from "moment";
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
  const [focusedDate, setFocusedDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);
  const [view, setView] = useState<"DAYS" | "YEARS_MONTHS">("DAYS");

  const [monthsDisplayed, setMonthsDisplayed] = useState<Date[]>([]);

  const handleKeydown = (e: KeyboardEvent) => {
    console.log(e.type);
    if (!focusedDate) {
      setFocusedDate(calendarStart);
    } else {
      switch (e.key) {
        case "ArrowUp":
          setFocusedDate((date) => moment(date).subtract(7, "days").toDate());
          break;
        case "ArrowDown":
          setFocusedDate((date) => moment(date).add(7, "days").toDate());
          break;
        case "ArrowLeft":
          setFocusedDate((date) => moment(date).subtract(1, "days").toDate());
          break;
        case "ArrowRight":
          setFocusedDate((date) => moment(date).add(1, "days").toDate());
          break;
        case "Enter":
          if (range) {
            if (!dateRange || !dateRange.start) {
              setDateRange((r) => ({ start: focusedDate, end: null }));
              console.log("a");
            } else if (dateRange.start) {
              if (!dateRange.end) {
                setDateRange((r) => ({ ...r, end: focusedDate }));
                console.log("b");
              } else if (
                moment(focusedDate).isBefore(dateRange.start, "days")
              ) {
                setDateRange((r) => ({ start: focusedDate, end: null }));
                console.log("c");
              } else if (moment(focusedDate).isAfter(dateRange.start, "days")) {
                setDateRange((r) => ({ ...r, end: focusedDate }));
                console.log("d");
              }
            }
          } else {
            setDate(focusedDate);
          }
          break;
      }
    }
  };

  useEffect(() => {
    console.log(focusedDate);
    if (
      moment(focusedDate)
        .startOf("month")
        .isAfter(
          moment(calendarStart)
            .add(monthsToDisplay - 1, "months")
            .startOf("month")
        )
    ) {
      handleCalendarUpdate(moment(calendarStart).add(1, "month").toDate());
    } else if (
      moment(focusedDate)
        .startOf("month")
        .isBefore(moment(calendarStart).startOf("month"))
    ) {
      handleCalendarUpdate(moment(calendarStart).subtract(1, "month").toDate());
    }
  }, [focusedDate, calendarStart]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

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
          start: null,
          end: null,
        }));
        console.log("e");
      } else if (
        !dateRange?.start ||
        moment(dateRange.start).isAfter(date, "day")
      ) {
        setDateRange((range) => ({
          start: date,
          end: null,
        }));
        console.log("f");
      } else if (moment(dateRange.start).isBefore(date, "day")) {
        setDateRange((range) => ({
          ...range,
          end: date,
        }));
        console.log("g");
      }
    } else {
      setDate(date);
    }
    setFocusedDate(date);
  };

  const handleShowDatepicker = (show: boolean) => setShow(show);

  const handleHoverDate = (date: Date) => {
    setHoverDate(date);
    handleFocusDate(date);
  };

  const handleFocusDate = (date: Date) => setFocusedDate(date);

  const toggleView = () =>
    setView((view) => (view === "YEARS_MONTHS" ? "DAYS" : "YEARS_MONTHS"));

  return {
    handleCalendarUpdate,
    handleSelectedDate,
    handleShowDatepicker,
    handleFocusDate,
    toggleView,
    minDate,
    maxDate,
    calendarStart,
    monthsDisplayed,
    show,
    view,
    range,
    focusedDate,
    date,
    dateRange,
    hoverDate,
    handleHoverDate,
  } as UseDatepickerReturn;
};
