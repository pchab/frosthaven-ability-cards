"use client";

import CardPile, { type PileActions } from "@/app/_components/cards/CardPile";
import FormIcon from "@/app/_components/class/geminate/FormIcon";
import { useSelectCards } from "@/app/[selectedClass]/select/useSelectCards";
import type { GeminateCard, GeminateForm } from "@/domain/geminate/cards";
import { geminate } from "@/domain/geminate/class";

export function SelectedGeminateCards({
	actions = () => [],
}: {
	actions?: PileActions<GeminateCard>;
}) {
	const handSizeByForm = geminate.handSize / 2;
	const { cards, removeCard } = useSelectCards<GeminateCard>();

	return (
		<div className="flex flex-col gap-4 items-center">
			{["melee", "ranged"].map((form) => {
				const cardsByForm = cards.filter((card) => card.form === form);
				return (
					<div
						key={`select-cards-form-${form}`}
						className="flex flex-row justify-center items-center"
					>
						<div className="flex flex-col p-4">
							<FormIcon form={form as GeminateForm} />
							<p className="text-lg">
								{cardsByForm.length}/{handSizeByForm}
							</p>
						</div>
						<CardPile
							cards={cardsByForm}
							actions={actions}
							maxCardLength={handSizeByForm}
							onCloseCard={removeCard}
						/>
					</div>
				);
			})}
		</div>
	);
}
