"use client";

import { use } from "react";
import CardPile, { type PileActions } from "@/app/_components/cards/CardPile";
import { useSelectCards } from "@/app/[selectedClass]/select/useSelectCards";
import { ClassContext } from "@/context/ClassContext";
import type { Card } from "@/domain/cards.type";

export function SelectedCards<X extends Card>({
	actions = () => [],
}: {
	actions?: PileActions<X>;
}) {
	const { handSize } = use(ClassContext);
	const { cards, removeCard } = useSelectCards<X>();

	return (
		<CardPile
			cards={cards}
			actions={actions}
			maxCardLength={handSize}
			onCloseCard={removeCard}
		/>
	);
}
