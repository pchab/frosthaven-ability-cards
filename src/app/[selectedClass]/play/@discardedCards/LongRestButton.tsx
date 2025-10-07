"use client";

import { useState } from "react";
import CardPile from "@/app/_components/cards/CardPile";
import BoardArea from "@/app/_components/layout/BoardArea";
import Modal from "@/app/_components/layout/Modal";
import { useCards } from "@/app/[selectedClass]/play/useCards";
import type { Card } from "@/domain/cards.type";

/**
 * Renders a "Long Rest" button that opens a modal allowing the user to select a card to lose.
 *
 * @param cards - The cards presented in the modal for selection
 * @returns A React element containing the button and the modal with the card pile
 */
export default function LongRestButton<X extends Card>({
	cards,
}: {
	cards: X[];
}) {
	const [doesLongRest, setDoesLongRest] = useState(false);
	const { makeRest } = useCards();

	const confirmLongRestAction = (lostCard: X) => [
		{
			name: `Confirm Long Rest: lose ${lostCard.name}`,
			onClick: () => makeRest(lostCard),
		},
	];

	return (
		<>
			<button type="button" onClick={() => setDoesLongRest(true)}>
				Long Rest
			</button>
			{doesLongRest && (
				<Modal onCancel={() => setDoesLongRest(false)}>
					<BoardArea title="Choose card to lose">
						<CardPile
							cards={cards}
							actions={confirmLongRestAction}
							maxCardLength={cards.length}
						/>
					</BoardArea>
				</Modal>
			)}
		</>
	);
}