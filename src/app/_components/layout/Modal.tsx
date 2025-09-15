"use client";

import { type ReactNode, useRef } from "react";
import { useOutsideEvent } from "../hooks/useOutsideEvent";

export default function Modal({
	children,
	onCancel,
}: {
	children: ReactNode;
	onCancel: () => void;
}) {
	const ref = useRef<HTMLDivElement>(null);
	useOutsideEvent(ref, onCancel);

	return (
		<div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-black/80 z-60">
			<div ref={ref}>
				{children}
			</div>
			<button
				type="button"
				aria-label="Close modal"
				onClick={onCancel}
				className="absolute top-0 right-0 p-8"
			>
				X
			</button>
		</div>
	);
}
