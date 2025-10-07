"use client";

import { type ReactNode, useRef } from "react";
import { useOutsideEvent } from "../hooks/useOutsideEvent";

/**
 * Render a centered modal dialog that closes via the close button or when clicking outside its content.
 *
 * @param children - Content to render inside the modal
 * @param display - Whether the modal is visible
 * @param onCancel - Callback invoked when the modal should close (triggered by outside click or the close button)
 * @returns The modal React element; hidden when `display` is `false`
 */
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
			<div ref={ref}>{children}</div>
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