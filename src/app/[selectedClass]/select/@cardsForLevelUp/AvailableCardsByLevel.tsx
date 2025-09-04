"use client";

import { use } from "react";
import CardPile from "@/app/_components/cards/CardPile";
import BoardArea from "@/app/_components/layout/BoardArea";
import { useSelectCards } from "@/app/[selectedClass]/select/useSelectCards";
import { ClassContext } from "@/context/ClassContext";
import type { Card } from "@/domain/cards.type";
import { useFrosthavenStore } from "@/stores/cards.store";

export default function AvailableCardsByLevel<X extends Card>({
	level,
}: {
	level: X["level"];
}) {
	const availableCards = useFrosthavenStore(
		(state) => state.availableCards as X[],
	);
	const currentClass = use(ClassContext);
	const { cards, selectCard } = useSelectCards<X>();

	const selectAction = (card: X) => [
		{
			name: "Select Card",
			onClick: () => selectCard(card),
		},
	];

	const filterRemainingCards = (card: X) =>
		cards.every(({ path }) => path !== card.path);
	const levelCards = availableCards.filter((card: X) => level === card.level);

	return (
		<BoardArea title={`Cards level ${level}`}>
			<CardPile
				cards={levelCards.filter(filterRemainingCards)}
				actions={selectAction}
				maxCardLength={
					currentClass.cards.filter((card: Card) => level === card.level).length
				}
			/>
		</BoardArea>
	);
}
