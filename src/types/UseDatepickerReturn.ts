export type UseDatepickerReturn = {
  handleCalendarUpdate: (date: Date) => void;
  handleSelectedDate: (date: Date) => void;
  handleFocusDate: (date: Date) => void;
  handleShowDatepicker: (show: boolean) => void;
  handleHoverDate: (date: Date) => void;
  toggleView: () => void;
  view: "DAYS" | "YEARS_MONTHS";
  minDate?: Date;
  maxDate?: Date;
  calendarStart: Date;
  calendarEnd: Date;
  show: boolean;
  monthsDisplayed: Date[];
  range: boolean;
  hoverDate: Date;
  focusedDate: Date;
  date: Date;
  dateRange: {
    start: Date;
    end: Date;
  };
};
