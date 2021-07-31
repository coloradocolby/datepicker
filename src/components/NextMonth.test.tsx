import React from "react";
import { render } from "@testing-library/react";
import { NextMonth } from "./NextMonth";
import { DatepickerProvider } from "../hooks/useDatepickerContext";
import userEvent from "@testing-library/user-event";
import moment from "moment";

const setup = () => {
  const handleCalendarUpdate = jest.fn();
  const calendarStart = new Date();

  const utils = render(
    // @ts-ignore
    <DatepickerProvider
      {...{
        handleCalendarUpdate,
        calendarStart,
      }}
    >
      <NextMonth />
    </DatepickerProvider>
  );

  return {
    ...utils,
    handleCalendarUpdate,
    calendarStart,
  };
};

test("responds to click event", () => {
  const { getByTestId, handleCalendarUpdate, calendarStart } = setup();
  userEvent.click(getByTestId("next-month"));

  expect(handleCalendarUpdate).toHaveBeenCalledWith(
    moment(calendarStart).add(1, "month").toDate()
  );
});

test("responds to tab and keydown event", () => {
  const { getByTestId, handleCalendarUpdate, calendarStart } = setup();
  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("next-month")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(handleCalendarUpdate).toHaveBeenCalledWith(
    moment(calendarStart).add(1, "month").toDate()
  );
});
