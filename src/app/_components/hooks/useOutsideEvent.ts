import { type RefObject, useEffect } from "react";

/**
 * Invokes a callback when user interactions occur outside the referenced element.
 *
 * Observes mouse clicks, touch end points, and keyboard events (Escape or Enter pressed while the event target is outside)
 * and calls the provided callback when the interaction target is outside the element referenced by `ref`.
 *
 * @param ref - Reference to the element treated as "inside"
 * @param onOutsideEvent - Callback invoked when an outside interaction is detected
 */
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