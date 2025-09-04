"use client";

import { use } from "react";
import CardPile from "@/app/_components/cards/CardPile";
import BoardArea from "@/app/_components/layout/BoardArea";
import { useCards } from "@/app/[selectedClass]/play/useCards";
import { ClassContext } from "@/context/ClassContext";
import type { Card } from "@/domain/cards.type";
import LongRestButton from "./LongRestButton";
import ShortRestButton from "./ShortRestButton";

export default function DiscardedCards() {
	const fhClass = use(ClassContext);
	const { currentCards, recoverCard, loseCard } = useCards();

	const discardPile = currentCards.filter(
		({ status }) => status === "discarded",
	);

	const actions = (card: Card) => [
		{
			name: "Recover Card",
			onClick: () => recoverCard(card),
		},
		{
			name: "Lose Card",
			onClick: () => loseCard(card),
		},
	];

	return (
		<BoardArea
			title="Discarded cards"
			actions={
				discardPile.length > 1
					? [
							{
								name: "Short Rest",
								node: <ShortRestButton cards={discardPile} />,
							},
							{
								name: "Long Rest",
								node: <LongRestButton cards={discardPile} />,
							},
						]
					: undefined
			}
		>
			<CardPile
				cards={discardPile}
				actions={actions}
				maxCardLength={fhClass.handSize}
			/>
		</BoardArea>
	);
}
