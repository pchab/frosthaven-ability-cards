"use client";

import {
	AnimatePresence,
	domAnimation,
	LazyMotion,
	motion,
} from "motion/react";
import Image from "next/image";
import { type ReactNode, useRef, useState } from "react";
import type { Card } from "@/domain/cards.type";
import { useOutsideEvent } from "../hooks/useOutsideEvent";
import ActionWheel, { type WheelAction } from "./ActionWheel";
import EnhanceSticker from "./Enhance/EnhanceSticker";

export function CardComponent<X extends Card>({
	card,
	children,
	actions = [],
	mapName,
	autoFocus,
	onCloseCard,
}: {
	card: X;
	children?: ReactNode;
	actions?: WheelAction[];
	mapName?: string;
	autoFocus?: boolean;
	onCloseCard?: () => void;
}): ReactNode {
	const innerRef = useRef<HTMLDivElement>(null);
	const [isActionWheelOpen, setIsActionWheelOpen] = useState(false);

	const onClickCard = () => {
		if (actions.length === 0) return;
		if (actions.length === 1) {
			actions[0].onClick();
			return;
		}
		setIsActionWheelOpen(!isActionWheelOpen);
	};

	useOutsideEvent(isActionWheelOpen ? innerRef : null, () =>
		setIsActionWheelOpen(false),
	);

	const cardLabel =
		actions.length === 1 ? (actions[0].name as string) : card.name;

	return (
		<motion.div ref={innerRef} className="relative" layoutId={card.name}>
			{children}
			<button
				type="button"
				autoFocus={autoFocus}
				aria-label={cardLabel}
				onClick={onClickCard}
			>
				<Image
					className="shadow-card shadow-gray-950/80"
					{...(mapName ? { useMap: `#${mapName}` } : {})}
					src={card.path}
					alt={`card ${card.name}`}
					width={143}
					height={200}
				/>
			</button>
			{onCloseCard && (
				<button
					type="button"
					aria-label="remove card"
					className="rounded-full border border-solid border-white px-1 bg-primary z-40 text-xs absolute -top-1 -right-1"
					onClick={onCloseCard}
				>
					X
				</button>
			)}
			<LazyMotion features={domAnimation}>
				<AnimatePresence>
					{isActionWheelOpen && (
						<ActionWheel
							actions={actions}
							onAction={() => setIsActionWheelOpen(false)}
						/>
					)}
				</AnimatePresence>
			</LazyMotion>
			{card.availableEnhancements?.map(
				({ position }, index) =>
					!!card.enhancements?.[index] && (
						<EnhanceSticker
							key={`${card.name}-enhance-slot-${index}`}
							enhancement={card.enhancements?.[index]}
							position={position}
						/>
					),
			)}
		</motion.div>
	);
}
