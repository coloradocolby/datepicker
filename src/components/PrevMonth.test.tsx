import React from "react";
import { render } from "@testing-library/react";
import { PrevMonth } from "./PrevMonth";
import { DatepickerContext } from "../context/datepicker.context";
import userEvent from "@testing-library/user-event";
import moment from "moment";

const setup = () => {
  const handleMonthUpdate = jest.fn();
  const month = new Date();

  const utils = render(
    <DatepickerContext.Provider
      // @ts-ignore
      value={{
        handleMonthUpdate,
        month,
      }}
    >
      <PrevMonth />
    </DatepickerContext.Provider>
  );

  return {
    ...utils,
    handleMonthUpdate,
    month,
  };
};

test("responds to click event", () => {
  const { getByTestId, handleMonthUpdate, month } = setup();
  userEvent.click(getByTestId("prev-month"));

  expect(handleMonthUpdate).toHaveBeenCalledWith(
    moment(month).subtract(1, "month").toDate()
  );
});

test("responds to tab and keydown event", () => {
  const { getByTestId, handleMonthUpdate, month } = setup();
  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("prev-month")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(handleMonthUpdate).toHaveBeenCalledWith(
    moment(month).subtract(1, "month").toDate()
  );
});
