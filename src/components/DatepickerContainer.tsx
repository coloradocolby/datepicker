import React, { useEffect } from "react";
import { useDatepicker } from "../context/datepicker.context";
import { useClickOutside } from "../hooks/useClickOutside";

export const DatepickerContainer = ({
  className = "",
  constainerRef,
  onChange,
  children,
}) => {
  const { selectedDate, handleShowDatepicker } = useDatepicker();

  useClickOutside(constainerRef, () => {
    handleShowDatepicker(false);
  });

  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);

  return <div className={className}>{children}</div>;
};
