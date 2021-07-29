import React, { useEffect } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const DatepickerContainer = ({
  className = "",
  constainerRef,
  onChange,
  children,
}) => {
  const { selectedDate, handleShowDatepicker } = useDatepickerContext();

  useClickOutside(constainerRef, () => {
    handleShowDatepicker(false);
  });

  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);

  return <div className={className}>{children}</div>;
};
