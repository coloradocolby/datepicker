import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Today } from "./Today";
import {
  DatepickerContext,
  DatepickerProvider,
} from "../context/datepicker.context";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  jest.resetAllMocks();
});

test("responds to click event", () => {
  let handleMonthUpdate = jest.fn();
  let handleSelectedDate = jest.fn();

  const { debug } = render(
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
  fireEvent.click(screen.getByText(/today/i));

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
  expect(handleSelectedDate).toHaveBeenCalled(); // TODO why do i need these waitFors for the test to pass. Look into this!
});
