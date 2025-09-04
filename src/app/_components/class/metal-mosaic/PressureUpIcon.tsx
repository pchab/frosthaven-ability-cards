"use client";

import Image from "next/image";
import { use } from "react";
import { IdentityContext } from "@/context/IdentityContext";
import {
	type MetalMosaicPressure,
	pressures,
} from "@/domain/metal-mosaic/class";

const path = "/metal-mosaic/icons/fh-metal-mosaic-pressure-up-color-icon.webp";
const pressureIncrementMapping: Record<
	MetalMosaicPressure,
	MetalMosaicPressure
> = {
	low: "regular",
	regular: "high",
	high: "over",
	over: "over",
};

export default function PressureUpIcon() {
	const { identity, changeIdentity } = use(IdentityContext);

	const currentPressure = pressures[identity];
	const increasePressure = () => {
		const newPressure = pressureIncrementMapping[currentPressure];
		if (newPressure === currentPressure) return;
		const fromTo: [string, string] = [currentPressure, newPressure];
		changeIdentity(pressures.indexOf(newPressure), fromTo);
	};

	return (
		<button
			type="button"
			onClick={increasePressure}
			aria-label="increase pressure"
		>
			<Image src={path} alt={`pressure-up`} width={417} height={600} />
		</button>
	);
}
