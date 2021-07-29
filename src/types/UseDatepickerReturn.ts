export type UseDatepickerReturn = {
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
