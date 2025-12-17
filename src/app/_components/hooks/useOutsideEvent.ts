import { type RefObject, useEffect, useEffectEvent } from "react";

export function useOutsideEvent<T extends HTMLElement>(
	ref: RefObject<T | null> | null,
	onOutsideEvent: () => void,
) {
	const handleOutsideClick = useEffectEvent((event: MouseEvent) => {
		if (!ref?.current?.contains(event.target as Node)) {
			onOutsideEvent();
		}
	});

	const handleOutsideTouch = useEffectEvent((event: TouchEvent) => {
		const changedTouch = event.changedTouches[0];
		const elem = document.elementFromPoint(
			changedTouch.clientX,
			changedTouch.clientY,
		);

		if (!ref?.current?.contains(elem as Node)) {
			onOutsideEvent();
		}
	});

	const handleOutsideKeyboard = useEffectEvent((event: KeyboardEvent) => {
		if (
			event.key === "Escape" ||
			(event.key === "Enter" && !ref?.current?.contains(event.target as Node))
		) {
			onOutsideEvent();
		}
	});

	useEffect(() => {
		if (!ref) return;

		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("touchend", handleOutsideTouch);
		document.addEventListener("keydown", handleOutsideKeyboard);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchend", handleOutsideTouch);
			document.removeEventListener("keydown", handleOutsideKeyboard);
		};
	}, [ref]);
}
