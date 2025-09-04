"use client";

import { use } from "react";
import CardPile from "@/app/_components/cards/CardPile";
import { useCards } from "@/app/[selectedClass]/play/useCards";
import { ClassContext } from "@/context/ClassContext";
import type { Card } from "@/domain/cards.type";
import { isGeminate } from "@/domain/geminate/class";

export default function CurrentHand<X extends Card>({
	classFilter = () => true,
}: {
	classFilter?: (card: X) => boolean;
}) {
	const selectedClass = use(ClassContext);
	const { currentCards, selectCard, discardCard, loseCard } = useCards<X>();

	const currentHand = currentCards
		.filter(classFilter)
		.filter(({ status }) => status === "inHand");

	const actions = (card: X) => [
		{
			name: "Select Card",
			onClick: () => selectCard(card),
		},
		{
			name: "Discard Card",
			onClick: () => discardCard(card),
		},
		{
			name: "Lose Card",
			onClick: () => loseCard(card),
		},
	];

	return (
		<CardPile
			cards={currentHand}
			actions={actions}
			maxCardLength={
				isGeminate(selectedClass)
					? selectedClass.handSize / 2
					: selectedClass.handSize
			}
		/>
	);
}
