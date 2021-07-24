import { useEffect } from "react";

export const useClickOutside = (ref, cb) => {
  useEffect(() => {
    const listener = (event) => {
      if (ref) {
        if (!ref?.current?.contains(event.target)) {
          cb();
        }
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, cb]);
};
