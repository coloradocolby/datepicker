export type UseDatepickerReturn = {
  handleCalendarUpdate: (date: Date) => void;
  handleSelectedDate: (date: Date) => void;
  handleShowDatepicker: (show: boolean) => void;
  toggleView: () => void;
  minDate?: Date;
  maxDate?: Date;
  calendarStart: Date;
  calendarEnd: Date;
  show: boolean;
  selectedDate: Date;
  monthsDisplayed: Date[];
  view: "DAYS" | "YEARS_MONTHS";
};
