import React, { createContext, FC, useContext, useState, useMemo } from "react";

import { Aavegotchi, useGetAavegotchisQuery } from "../types/graphql";

export interface GotchiStore {
	selectedGotchiID: string | undefined;
	setGotchiID: React.Dispatch<React.SetStateAction<string | undefined>>;
	aavegotchis?: Aavegotchi[];
	loading: boolean;
	activeGotchi?: Aavegotchi;
}

export const GotchiContext = createContext<GotchiStore | undefined>(undefined);

export const GotchiProvider: FC = ({ children }) => {
	const { data, loading } = useGetAavegotchisQuery();
	const [selectedGotchiID, setGotchiID] = useState<Aavegotchi["id"]>();

	const activeGotchi = useMemo(() => {
		return data?.aavegotchis.find(({ id }) => selectedGotchiID === id);
	}, [selectedGotchiID, data?.aavegotchis]);

	return (
		<GotchiContext.Provider
			value={{
				selectedGotchiID,
				setGotchiID,
				aavegotchis: data?.aavegotchis,
				loading,
				activeGotchi,
			}}
		>
			{children}
		</GotchiContext.Provider>
	);
};

export const useGotchi = (): GotchiStore => {
	const context = useContext(GotchiContext);

	if (context === undefined) {
		throw new ReferenceError("Access GotchiStore inside its context provider.");
	}

	return context;
};
