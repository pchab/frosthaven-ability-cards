import BoardArea from "@/app/_components/layout/BoardArea";
import Heading from "@/app/_components/layout/Heading";
import AvailableCardsByLevel from "./@cardsForLevelUp/AvailableCardsByLevel";

export default function SelectCardsLayout({
	children,
	selectedCards,
	cardsForLevelUp,
}: LayoutProps<"/[selectedClass]/select">) {
	return (
		<div className="p-8 flex flex-col gap-4 items-center">
			<Heading title="Select your cards" />
			<BoardArea>{children}</BoardArea>

			<div className="flex flex-col gap-4 items-center w-card-3/2">
				{selectedCards}

				<AvailableCardsByLevel level={1} />
				<div className="flex flex-row flex-wrap gap-4 justify-center items-center">
					<AvailableCardsByLevel level={"X"} />
					{cardsForLevelUp}
				</div>
			</div>
		</div>
	);
}
