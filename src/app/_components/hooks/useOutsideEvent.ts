import { type RefObject, useEffect } from "react";

export function useOutsideEvent<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideEvent: () => void,
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onOutsideEvent();
      }
    };

    const handleOutsideTouch = (event: TouchEvent) => {
      const changedTouch = event.changedTouches[0];
      const elem = document.elementFromPoint(
        changedTouch.clientX,
        changedTouch.clientY,
      );

      if (!ref.current?.contains(elem as Node)) {
        onOutsideEvent();
      }
    };

    const handleOutsideKeyboard = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" ||
        (event.key === "Enter" && !ref.current?.contains(event.target as Node))
      ) {
        onOutsideEvent();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchend", handleOutsideTouch);
    document.addEventListener("keydown", handleOutsideKeyboard);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchend", handleOutsideTouch);
      document.removeEventListener("keydown", handleOutsideKeyboard);
    };
  }, [ref, onOutsideEvent]);
}
