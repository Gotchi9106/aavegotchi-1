import type { FC } from "react";

import type { Aavegotchi } from "../../types/graphql";

import { AavegotchiCard } from "./aavegotchi-card";
import styles from "./aavegotchis-list.module.css";

interface AavegotchisListProps {
	aavegotchis: Aavegotchi[];
}

export const AavegotchisList: FC<AavegotchisListProps> = ({ aavegotchis }) => {
	return (
		<div className={styles.aavegotchisList}>
			{aavegotchis.map((gotchi, i) => {
				return <AavegotchiCard key={i} {...gotchi} />;
			})}
		</div>
	);
};
