import moment from "moment";
import { useEffect, useState } from "react";

type Datepicker = {
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
  view: "DAYS" | "YEARS_MONTHS";
};

export const useDatepicker = ({
  min: _min,
  max: _max,
}: {
  min: Date;
  max: Date;
}) => {
  const [min] = useState<Date>(_min);
  const [max] = useState<Date>(_max);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [month, setMonth] = useState<Date>(moment().startOf("month").toDate());
  const [dayOffset, setDayOffset] = useState<number>();
  const [show, setShow] = useState<boolean>(false);

  const [view, setView] = useState<"DAYS" | "YEARS_MONTHS">("DAYS");

  useEffect(() => {
    setDayOffset(moment(month).startOf("month").isoWeekday());
  }, [month]);

  const handleMonthUpdate = (date: Date) =>
    setMonth(moment(date).startOf("month").toDate());

  const handleSelectedDate = (date: Date) => setSelectedDate(date);

  const handleShowDatepicker = (show: boolean) => setShow(show);

  const toggleView = () =>
    setView((view) => (view === "YEARS_MONTHS" ? "DAYS" : "YEARS_MONTHS"));

  return {
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
  } as Datepicker;
};
