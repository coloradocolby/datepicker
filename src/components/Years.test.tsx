import React from "react";
import { render } from "@testing-library/react";
import { Months } from "./Months";
import { DatepickerProvider } from "../hooks/useDatepickerContext";
import userEvent from "@testing-library/user-event";
import moment from "moment";
import { DatepickerContainer } from "./DatepickerContainer";
import { Datepicker } from "./Datepicker";
import { Month } from "./Month";
import { Years } from "./Years";

const setup = () => {
  const toggleView = jest.fn();
  const handleCalendarUpdate = jest.fn();
  const view = "YEARS_MONTHS";
  const utils = render(
    // @ts-ignore
    <DatepickerProvider
      {...{
        toggleView,
        handleCalendarUpdate,
        view,
        min: new Date("01-01-1900"),
        max: new Date("01-01-2100"),
        show: true,
      }}
    >
      <Datepicker>
        {() => (
          <Years>
            {({ year }) => (
              <Months year={year}>
                {({ display, value, isActiveMonth }) => (
                  <Month value={value}>{display}</Month>
                )}
              </Months>
            )}
          </Years>
        )}
      </Datepicker>
    </DatepickerProvider>
  );

  return {
    ...utils,
    toggleView,
    handleCalendarUpdate,
  };
};

test("renders correctly", () => {
  const { getByText, toggleView, handleCalendarUpdate } = setup();

  const jan = getByText(/jan/i);
  expect(jan).toBeInTheDocument();
  expect(getByText(/feb/i)).toBeInTheDocument();
  expect(getByText(/mar/i)).toBeInTheDocument();
  expect(getByText(/apr/i)).toBeInTheDocument();
  expect(getByText(/may/i)).toBeInTheDocument();
  expect(getByText(/jun/i)).toBeInTheDocument();
  expect(getByText(/jul/i)).toBeInTheDocument();
  expect(getByText(/aug/i)).toBeInTheDocument();
  expect(getByText(/sep/i)).toBeInTheDocument();
  expect(getByText(/oct/i)).toBeInTheDocument();
  expect(getByText(/nov/i)).toBeInTheDocument();
  expect(getByText(/dec/i)).toBeInTheDocument();

  userEvent.click(jan);

  expect(toggleView).toHaveBeenCalled();
  expect(handleCalendarUpdate).toHaveBeenCalledWith(
    moment("Jan-01-2021", "MMM-DD-YYYY").toDate()
  );
});

// test("responds to click event", () => {
//   const { toggleView, getByText } = setup({
//     month: new Date("06-16-1994"),
//     view: VIEW_TYPES.DAYS,
//   });

//   const label = getByText(/june 1994/i);
//   expect(label).toBeInTheDocument();

//   userEvent.click(label);
//   expect(toggleView).toHaveBeenCalled();
// });

// test("responds to tab and keydown event", () => {
//   const { toggleView, getByText, getByTestId } = setup({
//     month: new Date("09-09-2000"),
//     view: VIEW_TYPES.YEARS_MONTHS,
//   });

//   expect(getByText(/september 2000/i)).toBeInTheDocument();
//   expect(document.body).toHaveFocus();
//   userEvent.tab();
//   expect(getByTestId("month-year")).toHaveFocus();
//   userEvent.keyboard("{enter}");
//   expect(toggleView).toHaveBeenCalled();
// });
