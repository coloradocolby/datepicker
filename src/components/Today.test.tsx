import React from "react";
import { render } from "@testing-library/react";
import { Today } from "./Today";
import { DatepickerProvider } from "../hooks/useDatepickerContext";
import userEvent from "@testing-library/user-event";

const setup = () => {
  let handleMonthUpdate = jest.fn();
  let handleSelectedDate = jest.fn();
  const utils = render(
    // @ts-ignore
    <DatepickerProvider
      {...{
        handleMonthUpdate,
        handleSelectedDate,
      }}
    >
      <Today />
    </DatepickerProvider>
  );

  return {
    ...utils,
    handleMonthUpdate,
    handleSelectedDate,
  };
};
test("responds to click event", () => {
  const { getByText, handleMonthUpdate, handleSelectedDate } = setup();
  userEvent.click(getByText(/today/i));

  expect(handleMonthUpdate).toHaveBeenCalled();
  expect(handleSelectedDate).toHaveBeenCalled();
});

test("responds to tab and keydown event", () => {
  const { getByText, getByTestId, handleMonthUpdate, handleSelectedDate } =
    setup();

  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("today")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(handleMonthUpdate).toHaveBeenCalled();
  expect(handleSelectedDate).toHaveBeenCalled();
});
