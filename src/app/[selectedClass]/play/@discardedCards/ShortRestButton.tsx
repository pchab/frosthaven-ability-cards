"use client";

import Image from "next/image";
import { Activity, useState } from "react";
import { CardComponent } from "@/app/_components/cards/Card";
import Button from "@/app/_components/inputs/Button";
import Modal from "@/app/_components/layout/Modal";
import { useCards } from "@/app/[selectedClass]/play/useCards";
import type { Card } from "@/domain/cards.type";

function getRandomCard<X extends Card>(arr: X[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export default function ShortRestButton<X extends Card>({
	cards,
}: {
	cards: X[];
}) {
	const [lostCard, setLostCard] = useState<X | undefined>(undefined);
	const [hasRerolled, setHasRerolled] = useState(false);
	const { makeRest } = useCards();

	const confirmShortRestAction = {
		name: `Confirm Short Rest: lose ${lostCard?.name}`,
		onClick: () => {
			if (!lostCard) return;
			makeRest(lostCard);
		},
	};

	return (
		<>
			<button type="button" onClick={() => setLostCard(getRandomCard(cards))}>
				Short Rest
			</button>
			<Modal display={!!lostCard} onCancel={() => setLostCard(undefined)}>
				<div className="flex flex-col gap-4 items-center">
					<Activity mode={!hasRerolled ? "visible" : "hidden"}>
						<Button
							autoFocus
							label="Short Rest"
							onClick={() => {
								setHasRerolled(true);
								const newLostCard = getRandomCard(
									cards.filter((c) => c !== lostCard),
								);
								setLostCard(newLostCard);
							}}
						>
							<div className="flex gap-2 items-center">
								Reroll Short Rest
								<Image
									src="/icons/fh-damage-color-icon.webp"
									alt="Suffer damage"
									width={24}
									height={23}
								/>
							</div>
						</Button>
					</Activity>
					{lostCard && (
						<CardComponent card={lostCard} actions={[confirmShortRestAction]} />
					)}
				</div>
			</Modal>
		</>
	);
}
