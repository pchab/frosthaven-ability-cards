import Link from "next/link";
import type { Card } from "@/domain/cards.type";
import { classNameToURI } from "@/domain/frosthaven-class";
import type { FrosthavenClass } from "@/domain/frosthaven-class.type";
import ClassIcon from "../_components/class/ClassIcon";

export default function SelectClass({
	fhClass,
}: {
	fhClass: FrosthavenClass<Card>;
}) {
	const { name } = fhClass;

	return (
		<Link href={`/${classNameToURI(name)}/select`}>
			<ClassIcon fhClass={fhClass} />
		</Link>
	);
}
