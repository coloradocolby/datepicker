import React from "react";
import { render } from "@testing-library/react";
import { MonthYear } from "./MonthYear";
import { DatepickerProvider } from "../hooks/useDatepickerContext";
import userEvent from "@testing-library/user-event";
import moment from "moment";

const setup = ({ month, view }) => {
  const toggleView = jest.fn();
  const utils = render(
    // @ts-ignore
    <DatepickerProvider
      {...{
        toggleView,
        month,
        view,
      }}
    >
      <MonthYear />
    </DatepickerProvider>
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
    view: "DAYS",
  });

  const label = getByText(/june 1994/i);
  expect(label).toBeInTheDocument();

  userEvent.click(label);
  expect(toggleView).toHaveBeenCalled();
});

test("responds to tab and keydown event", () => {
  const { toggleView, getByText, getByTestId } = setup({
    month: new Date("09-09-2000"),
    view: "YEARS_MONTHS",
  });

  expect(getByText(/september 2000/i)).toBeInTheDocument();
  expect(document.body).toHaveFocus();
  userEvent.tab();
  expect(getByTestId("month-year")).toHaveFocus();
  userEvent.keyboard("{enter}");
  expect(toggleView).toHaveBeenCalled();
});
