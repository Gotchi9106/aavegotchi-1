import type { FC } from "react";
import type { Aavegotchi } from "../../types/graphql";

import { AavegotchiCard } from "./aavegotchi-card";

interface AavegotchisListProps {
	aavegotchis: Aavegotchi[];
}

export const AavegotchisList: FC<AavegotchisListProps> = ({ aavegotchis }) => {
	return (
		<>
			{aavegotchis.map((gotchi, i) => {
				return <AavegotchiCard key={i} {...gotchi} />;
			})}
		</>
	);
};
