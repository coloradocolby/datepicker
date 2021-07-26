import React from "react";
import { render } from "@testing-library/react";
import { Today } from "./Today";
import { DatepickerContext } from "../context/datepicker.context";
import userEvent from "@testing-library/user-event";

test("responds to click event", () => {
  let handleMonthUpdate = jest.fn();
  let handleSelectedDate = jest.fn();

  const { getByText } = render(
    <DatepickerContext.Provider
      // @ts-ignore
      value={{
        handleMonthUpdate,
        handleSelectedDate,
      }}
    >
      <Today />
    </DatepickerContext.Provider>
  );
  userEvent.click(getByText(/today/i));

  expect(handleMonthUpdate).toHaveBeenCalled();
  expect(handleSelectedDate).toHaveBeenCalled();
});

test("responds to tab and keydown event", () => {
  let handleMonthUpdate = jest.fn();
  let handleSelectedDate = jest.fn();

  const { getByTestId } = render(
    <DatepickerContext.Provider
      // @ts-ignore
      value={{
        handleMonthUpdate,
        handleSelectedDate,
      }}
    >
      <Today />
    </DatepickerContext.Provider>
  );
  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("today")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(handleMonthUpdate).toHaveBeenCalled();
  expect(handleSelectedDate).toHaveBeenCalled();
});
