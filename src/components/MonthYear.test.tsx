import React from "react";
import { render } from "@testing-library/react";
import { MonthYear } from "./MonthYear";
import { DatepickerContext } from "../context/datepicker.context";
import userEvent from "@testing-library/user-event";
import moment from "moment";
import { VIEW_TYPES } from "../models/view_types";

const setup = ({ month, view }) => {
  const toggleView = jest.fn();
  const utils = render(
    <DatepickerContext.Provider
      // @ts-ignore
      value={{
        toggleView,
        month,
        view,
      }}
    >
      <MonthYear />
    </DatepickerContext.Provider>
  );

  return {
    ...utils,
    toggleView,
    month,
  };
};

test("responds to click event", () => {
  const { toggleView, getByText } = setup({
    month: new Date("06-16-1994"),
    view: VIEW_TYPES.DAYS,
  });

  const label = getByText(/june 1994/i);
  expect(label).toBeInTheDocument();

  userEvent.click(label);
  expect(toggleView).toHaveBeenCalled();
});

test("responds to tab and keydown event", () => {
  const { toggleView, getByText, getByTestId } = setup({
    month: new Date("09-09-2000"),
    view: VIEW_TYPES.YEARS_MONTHS,
  });

  expect(getByText(/september 2000/i)).toBeInTheDocument();
  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("month-year")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(toggleView).toHaveBeenCalled();
});
