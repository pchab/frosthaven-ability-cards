import Image from "next/image";
import type { GeminateForm } from "@/domain/geminate/cards";

export default function FormIcon({ form }: { form: GeminateForm }) {
	const formPath = `/geminate/icons/fh-geminate-${form}-color-icon.webp`;

	return <Image src={formPath} alt={`form-${form}`} width={33} height={60} />;
}
