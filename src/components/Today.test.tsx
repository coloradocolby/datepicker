import React from "react";
import { render } from "@testing-library/react";
import { Today } from "./Today";
import { DatepickerProvider } from "../hooks/useDatepickerContext";
import userEvent from "@testing-library/user-event";

const setup = () => {
  let handleCalendarUpdate = jest.fn();
  let handleSelectedDate = jest.fn();
  const utils = render(
    // @ts-ignore
    <DatepickerProvider
      {...{
        handleCalendarUpdate,
        handleSelectedDate,
      }}
    >
      <Today />
    </DatepickerProvider>
  );

  return {
    ...utils,
    handleCalendarUpdate,
    handleSelectedDate,
  };
};
test("responds to click event", () => {
  const { getByText, handleCalendarUpdate, handleSelectedDate } = setup();
  userEvent.click(getByText(/today/i));

  expect(handleCalendarUpdate).toHaveBeenCalled();
  expect(handleSelectedDate).toHaveBeenCalled();
});

test("responds to tab and keydown event", () => {
  const { getByText, getByTestId, handleCalendarUpdate, handleSelectedDate } =
    setup();

  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("today")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(handleCalendarUpdate).toHaveBeenCalled();
  expect(handleSelectedDate).toHaveBeenCalled();
});
