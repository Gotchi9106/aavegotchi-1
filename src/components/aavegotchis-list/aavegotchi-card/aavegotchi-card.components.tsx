import type { FC } from "react";
import { Card, CardContent, Tag } from "@faramo.zayw/reabulma";

import type { Aavegotchi } from "../../../types/graphql";

export const AavegotchiCard: FC<Aavegotchi> = ({ name, id }) => {
	return (
		<Card hasBackgroundColor="white-light" hasTextColor="black" isRadiusless>
			<CardContent spacing={["p-1"]}>
				<Tag isColor="info" isLight isRounded isUnselectable>
					{id}.
				</Tag>{" "}
				{name}
			</CardContent>
		</Card>
	);
};
