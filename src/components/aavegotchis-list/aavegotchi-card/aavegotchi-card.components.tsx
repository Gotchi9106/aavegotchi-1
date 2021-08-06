import { Card, CardContent } from "@faramo.zayw/reabulma";
import type { FC } from "react";
import type { Aavegotchi } from "../../../types/graphql";

export const AavegotchiCard: FC<Aavegotchi> = ({ name, id }) => {
	return (
		<Card hasBackgroundColor="primary-light" hasTextColor="black" isRadiusless>
			<CardContent spacing={["p-1"]}>
				{id}. {name}
			</CardContent>
		</Card>
	);
};
