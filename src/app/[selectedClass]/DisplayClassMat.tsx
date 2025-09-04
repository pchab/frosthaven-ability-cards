"use client";

import { use, useState } from "react";
import { ClassContext } from "@/context/ClassContext";
import CharacterMat from "../_components/class/CharacterMat";
import Modal from "../_components/layout/Modal";

export default function DisplayClassMat() {
	const [display, setDisplay] = useState(false);
	const fhClass = use(ClassContext);

	return (
		<>
			{display && (
				<Modal onCancel={() => setDisplay(false)}>
					<CharacterMat className={fhClass.name}></CharacterMat>
				</Modal>
			)}
			<button
				type="button"
				aria-label="Display class mat"
				className="rounded-full border-solid border-2 border-white px-2 bg-primary"
				onClick={() => setDisplay(true)}
			>
				?
			</button>
		</>
	);
}
