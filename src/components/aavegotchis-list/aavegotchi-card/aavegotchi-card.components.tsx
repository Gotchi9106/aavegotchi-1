import type { FC } from "react";
import classnames from "classnames";
import { Card, CardContent, Tag } from "@faramo.zayw/reabulma";

import type { Aavegotchi } from "../../../types/graphql";

import styled from "./aavegotchi-card.module.css";

interface AavegotchiCardProps extends Pick<Aavegotchi, "id" | "name"> {
	isSelected?: boolean;
	onClick(): void;
}

export const AavegotchiCard: FC<AavegotchiCardProps> = ({
	name,
	id,
	isSelected,
	onClick,
}) => {
	return (
		<Card
			hasBackgroundColor="white-light"
			hasTextColor="black"
			isRadiusless
			typography={{ size: 6 }}
			onClick={onClick}
			className={classnames(
				styled.aavegotchisCard,
				isSelected ? styled.active : undefined,
			)}
		>
			<CardContent spacing={["px-5", "py-4"]}>
				<Tag
					isColor="info"
					isLight
					isRounded
					isUnselectable
					spacing={["mr-4"]}
					typography={{ size: 6, family: "monospace" }}
				>
					#{id}
				</Tag>
				{name}
			</CardContent>
		</Card>
	);
};
