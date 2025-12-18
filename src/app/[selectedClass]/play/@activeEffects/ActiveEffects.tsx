"use client";

import { AnimatePresence } from "motion/react";
import { use, useState } from "react";
import { CardComponent } from "@/app/_components/cards/Card";
import CardPile from "@/app/_components/cards/CardPile";
import CardWithSlots, {
	type CardWithRequiredSlots,
} from "@/app/_components/cards/CardWithSlots";
import CardWithMode, {
	type HiveCardWithRequiredMode,
} from "@/app/_components/class/hive/CardWithMode";
import { useHiveMode } from "@/app/_components/class/hive/useHiveMode";
import BoardArea from "@/app/_components/layout/BoardArea";
import Modal from "@/app/_components/layout/Modal";
import { useCards } from "@/app/[selectedClass]/play/useCards";
import { ClassContext } from "@/context/ClassContext";
import type { Card } from "@/domain/cards.type";
import type { HiveCard } from "@/domain/hive/cards";
import { isHive } from "@/domain/hive/class";

function cardHasSlots(card: Card): card is CardWithRequiredSlots {
	return !!card.slots;
}

function cardHasMode(card: HiveCard): card is HiveCardWithRequiredMode {
	return !!card.mode;
}

export default function ActiveEffects<X extends Card>() {
	const { currentCards, discardCard, loseCard } = useCards<X>();
	const { activateHiveMode } = useHiveMode();
	const currentClass = use(ClassContext);
	const [isSelectingMode, setIsSelectingMode] = useState(false);

	const activeEffects = currentCards.filter(({ status }) =>
		["activeTop", "activeBottom"].includes(status),
	);

	const removeEffectAction = (card: X) => {
		const action =
			card.status === "activeTop" ? card.actions.top : card.actions.bottom;
		return action === "activeDiscard" ? discardCard(card) : loseCard(card);
	};

	const getCardComponent = (card: X) => {
		const props = {
			key: card.name,
			onCloseCard: () => removeEffectAction(card),
		};
		if (isHive(currentClass) && cardHasMode(card)) {
			return <CardWithMode {...props} card={card} />;
		}
		if (cardHasSlots(card)) {
			return <CardWithSlots {...props} card={card} />;
		}
		return <CardComponent {...props} card={card} />;
	};

	if (isHive(currentClass) && !isSelectingMode && currentCards.length) {
		const hasSelectedMode = (currentCards as HiveCard[]).some(
			(card) => card.isSelectedMode,
		);
		if (!hasSelectedMode) {
			setIsSelectingMode(true);
		}
	}

	const activateHiveModeAction = (card: HiveCard) => [
		{
			name: "Activate Hive Mode",
			onClick: () => {
				activateHiveMode(card);
				setIsSelectingMode(false);
			},
		},
	];

	const cardsWithMode = currentCards.filter(cardHasMode);

	return (
		<div className="grid grid-cols-3 gap-4 min-w-115 min-h-card">
			<Modal
				display={isSelectingMode}
				onCancel={() => setIsSelectingMode(false)}
			>
				<BoardArea title="Select mode">
					<CardPile
						cards={cardsWithMode}
						actions={activateHiveModeAction}
						maxCardLength={cardsWithMode.length}
						onCloseCard={removeEffectAction}
					/>
				</BoardArea>
			</Modal>
			<AnimatePresence mode="popLayout">
				{activeEffects.map((card) => getCardComponent(card))}
			</AnimatePresence>
		</div>
	);
}
