import { render } from "@testing-library/react";
import React from "react";
import { DaysOfWeek } from "./DaysOfWeek";

const setup = ({ days }) => {
  const utils = render(<DaysOfWeek days={days} />);

  return {
    ...utils,
  };
};

test("renders default days", () => {
  const { getByText } = setup({
    days: undefined,
  });
  expect(getByText(/sun/i)).toBeInTheDocument();
  expect(getByText(/mon/i)).toBeInTheDocument();
  expect(getByText(/tue/i)).toBeInTheDocument();
  expect(getByText(/wed/i)).toBeInTheDocument();
  expect(getByText(/thu/i)).toBeInTheDocument();
  expect(getByText(/fri/i)).toBeInTheDocument();
  expect(getByText(/sat/i)).toBeInTheDocument();
});

test("renders custom days", () => {
  const { getByText } = setup({
    days: ["a", "b", "c"],
  });
  expect(getByText(/a/i)).toBeInTheDocument();
  expect(getByText(/b/i)).toBeInTheDocument();
  expect(getByText(/c/i)).toBeInTheDocument();
});
