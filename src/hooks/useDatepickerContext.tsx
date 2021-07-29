import React, { useContext } from "react";
import { UseDatepickerReturn } from "../types/UseDatepickerReturn";
import { omit } from "../utils/helpers";

export const DatepickerContext =
  React.createContext<UseDatepickerReturn | null>(null);

export const useDatepickerContext = (): UseDatepickerReturn =>
  useContext(DatepickerContext);

export const DatepickerProvider = (
  props: UseDatepickerReturn & { children: React.ReactNode }
) => (
  <DatepickerContext.Provider
    value={{
      ...(omit(props, "children") as UseDatepickerReturn),
    }}
  >
    {props.children}
  </DatepickerContext.Provider>
);
