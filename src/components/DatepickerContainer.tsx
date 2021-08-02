import React, { useEffect } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { useDatepickerContext } from "../hooks/useDatepickerContext";

export const DatepickerContainer = ({
  className = "",
  constainerRef,
  onChange,
  children,
}) => {
  const { date, handleShowDatepicker } = useDatepickerContext();

  useClickOutside(constainerRef, () => {
    handleShowDatepicker(false);
  });

  useEffect(() => {
    onChange(date);
  }, [date]);

  return <div className={className}>{children}</div>;
};
