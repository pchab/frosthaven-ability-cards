"use client";

import { use } from "react";
import { ClassContext } from "@/context/ClassContext";
import { forms, type GeminateCard } from "@/domain/geminate/cards";
import { isGeminate } from "@/domain/geminate/class";
import { IdentityContext } from "../../../../context/IdentityContext";
import CurrentHand from "./CurrentHand";

export default function CurrentHandClassWrapper() {
	const selectedClass = use(ClassContext);
	const { identity } = use(IdentityContext);

	return (
		<CurrentHand
			classFilter={
				isGeminate(selectedClass)
					? ({ form }: GeminateCard) => form === forms[identity]
					: undefined
			}
		/>
	);
}
