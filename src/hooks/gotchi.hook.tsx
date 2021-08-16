import React, { createContext, FC, useContext, useState } from "react";
import { Aavegotchi } from "../types/graphql";

export interface GotchiStore {
	selectedGotchiID: string | undefined;
	setGotchiID: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const GotchiContext = createContext<GotchiStore | undefined>(undefined);

export const GotchiProvider: FC = ({ children }) => {
	const [selectedGotchiID, setGotchiID] = useState<Aavegotchi["id"]>();

	return (
		<GotchiContext.Provider value={{ selectedGotchiID, setGotchiID }}>
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
