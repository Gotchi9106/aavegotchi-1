import type { FC } from "react";
import { useGotchi } from "../../hooks";

import type { Aavegotchi } from "../../types/graphql";

import { AavegotchiCard } from "./aavegotchi-card";
import styles from "./aavegotchis-list.module.css";

interface AavegotchisListProps {
	aavegotchis: Aavegotchi[];
}

export const AavegotchisList: FC<AavegotchisListProps> = ({ aavegotchis }) => {
	const { selectedGotchiID, setGotchiID } = useGotchi();

	return (
		<div className={styles.aavegotchisList}>
			{aavegotchis.map((gotchi, i) => {
				return (
					<AavegotchiCard
						{...gotchi}
						key={i}
						onClick={() => setGotchiID(gotchi.id)}
						isSelected={gotchi.id === selectedGotchiID}
					/>
				);
			})}
		</div>
	);
};
